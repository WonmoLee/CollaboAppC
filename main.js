/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
'use strict';

const electron = require('electron');
const {app,BrowserWindow,ipcMain} = electron;
const url = require('url');
const path = require('path');
const io = require('socket.io-client');
const axios = require('axios');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');
const httpInstance = axios.create({
  baseURL:'http://61.75.138.220:3030'
});

const handler_manager = require('./handler_manager');
const SocketService = require('./service/socketService');
const SocketEvent = require('./handler_manager/event/socketEvent');
const TokenManager = require('./service/tokenManager');
const tokenManager = new TokenManager();
const MainWindowActions = require('./mainProcess/MainWindowActions');

let win;
let socket;
let modal;
let waitDialog;
let listener;
let errorListener;
let locale;

const displayLoginWindow = (event, message)=>{
  const {width,height} = electron.screen.getPrimaryDisplay().workAreaSize;
  const options = {
    width:width,
    height:height,
    resizable:false,
    fullscreenable:false,
    show:false,
    webPreferences:{
      affinity:true,
      nodeIntegration:true,
      contextIsolation: false
    }
  };
  win = new BrowserWindow(options);
  win.loadURL(url.format({
    pathname:path.join(__dirname,'login.html'),
    protocol:'file',
    slashes:true
  }));
  win.webContents.openDevTools();
  win.once('ready-to-show',()=>{
    console.log('ready-to-show');
    win.show();
  });
  win.on('closed',()=>{
    console.log('window closed');
    win = null;
    app.quit();
  });
  autoUpdater.checkForUpdates();
};
const displaySignUpModal = (event,message)=>{
  win.webContents.send('hide-page');
  modal = new BrowserWindow({parent:win,modal:true,show:false});

  modal.loadURL(url.format({
    pathname:path.join(__dirname,'signUpModal.html'),
    protocol:'file:'
  }));
  modal.once('ready-to-show',()=>{
    modal.show();
  });
  modal.on('closed',()=>{
    modal = null;
  });
};
const destroySignUpModal = (event,message)=>{
  win.webContents.send('hide-page');
  modal.close();
};
const createSignUpRequest = (event, message)=>{
  httpInstance.post('/users',message)
    .then((response)=>{
      event.sender.send('signUpRequest-Success',response.data);
    })
    .catch((error)=>{
      const result = {
        status:error.response.status,
        statusText:error.response.statusText
      };
      event.sender.send('signUpRequest-Failed',result);
    })
};
const displayWaitDialog = (event, message)=>{
  const options = {
    width:300,
    height:300,
    resizable:false,
    fullscreenable:false,
    show:false,
    frame:false,
    webPreferences:{
      affinity:true,
      nodeIntegration:true
    }
  };
  waitDialog = new BrowserWindow(options);
  waitDialog.loadURL(url.format({
    pathname:path.join(__dirname,'waitDialog.html'),
    protocol:'file',
    slashes:true
  }));
  waitDialog.once('ready-to-show',()=>{
    win.hide();
    waitDialog.show();
    const socketURL = 'ws://61.75.138.220:3030';
    const socketOptions = {
      transports:['websocket'],
      forceNew:true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: Infinity,
      query:{
        id:tokenManager.getId(),
        token:message.data.token
      }
    };
    socket = SocketService.createSocket(io,socketURL,socketOptions);
    tokenManager.setToken(message.data.token);
    listener = SocketService.addHandler(socket,waitDialog,handler_manager[SocketEvent.CONNECT]);
    errorListener = SocketService.addHandlerWithTokenManager(socket,waitDialog,handler_manager[SocketEvent.ERROR],tokenManager);
    MainWindowActions(ipcMain,socket,tokenManager);
  });
  waitDialog.on('closed',()=>{
    waitDialog = null;
  });
};
const destroyWaitDialog = (event, message)=>{
  socket.removeListener('connect',listener);
  socket.removeListener('error',errorListener);
  win.webContents.clearHistory();
  win.setResizable(true);
  win.setFullScreenable(true);
  win.setMinimumSize(600,600);
  win.loadURL(url.format({
    pathname:path.join(__dirname,'main.html'),
    protocol:'file:',
    slashes:true
  }));
  setTimeout(function(){
    SocketService.addHandlers(socket, win, handler_manager);
    SocketService.addHandler(socket, win, handler_manager[SocketEvent.CONNECT]);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.RECONNECT_ATTEMPT], tokenManager);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.DISCONNECT], tokenManager);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.TOKENREFRESHREQUIRED], tokenManager);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.BROADCAST_MESSAGE], tokenManager);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.RECEIVE_INVITEUSER], tokenManager);
    SocketService.addHandlerWithTokenManager(socket, win, handler_manager[SocketEvent.ERROR], tokenManager);
    waitDialog.close();
    locale = app.getLocale();
    win.webContents.send('getProfile', {name: tokenManager.getId(), locale: locale});
    win.show();
}, 2000);
};
app.on('ready',displayLoginWindow);
ipcMain.on('displayWaitDialog',displayWaitDialog);
ipcMain.on('destroyWaitDialog',destroyWaitDialog);
ipcMain.on('displaySignUpModal',displaySignUpModal);
ipcMain.on('destroySignUpModal',destroySignUpModal);
ipcMain.on('signUpRequest',createSignUpRequest);
ipcMain.on('signInRequest',(event,message)=>{
  httpInstance.post('/users/login',message)
    .then((response)=>{
      tokenManager.setId(message.id);
      event.sender.send('signInRequest-Success',response);
    })
    .catch((error)=>{
      const result = {
        status:error.response.status,
        statusText:error.response.statusText
      };
      event.sender.send('signInRequest-Failed',result);
    })
});

app.on('window-all-closed',()=>{
  app.quit();
});
app.on('activate',()=>{
  app.quit();
});

// 앱 업데이트
autoUpdater.on('checking-for-update', () => {
  log.info('업데이트 확인 중...');
});
autoUpdater.on('update-available', (info) => {
  log.info('업데이트가 가능합니다.');
});
autoUpdater.on('update-not-available', (info) => {
  log.info('현재 최신버전입니다.');
});
autoUpdater.on('error', (err) => {
  log.info('에러가 발생하였습니다. 에러내용 : ' + err);
});
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "다운로드 속도: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - 현재 ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  log.info(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  log.info('업데이트가 완료되었습니다.');
});
