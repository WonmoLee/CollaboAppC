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

let win;

app.on('ready', ()=>{
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    const options = {
        width: width,
        height: height,
        resizeable: false,
        fullscreenable: false,
        webPreferences: {
            affinity:true,
            nodeIntegration: false
        }
    };
    win = new BrowserWindow(options);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file'
    }));
});
app.on('window-all-closed', ()=>{
    app.quit();
});
app.on('activate', ()=>{
    app.quit();
});