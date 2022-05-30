/**
 * Author: wonmoLee 
 * Date: 2022.05.29
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

const electron = require('electron');
const {app, BrowserWindow} = electron;
const url = require('url');
const path = require('path');
const handler_manager = require('./handler_manager');

let win;

app.on('ready', ()=>{
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    const options = {
        width: width,
        height: height,
        resizeable: false,
        fullscreenable: false,
        show: false,
        webPreferences: {
            affinity:true,
            nodeIntegration: true
        }
    };
    win = new BrowserWindow(options);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file'
    }));
    win.webContents.openDevTools(); // 개발자도구
    win.once('ready-to-show', ()=>{
        win.show();
    });
    win.on('closed', ()=>{
        win = null;
        app.quit();
    })
});
app.on('window-all-closed', ()=>{
    app.quit();
});
app.on('activate', ()=>{
    app.quit();
});