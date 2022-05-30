/**
 * Author: wonmoLee 
 * Date: 2022.05.29
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (socket, win)=>{
    const SocketEvent = require('../event/socketEvent')
    console.log(`socket connected. socket id is ${socket.id}`);
    socket.emit(SocketEvent.HELLO, {message: 'Hello Server'});
    win.webContents.send(SocketEvent.HELLO, {message: 'Hello Renderer Process'});
}