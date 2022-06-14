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

module.exports = (socket,win,TokenManager,message)=>{
  console.log('broadCast Message');
  win.webContents.send('receiveMessage',message);
};