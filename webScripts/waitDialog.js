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

(()=>{
  const electron = require('electron');
  const ipcRenderer = electron.ipcRenderer;
  ipcRenderer.on('hello',(event,args)=>{
    event.sender.send('destroyWaitDialog');
  });
})();