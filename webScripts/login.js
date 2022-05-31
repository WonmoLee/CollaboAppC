/**
 * Author: wonmoLee 
 * Date: 2022.05.31
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

(()=>{
    const electron = require('electron');
    const ipcRenderer = electron.ipcRenderer;
    const socketEvent = require('././handler_manager/event/socketEvent');
    ipcRenderer.on(socketEvent.HELLO, (event, message)=>{
        console.log(message);
    });
})();