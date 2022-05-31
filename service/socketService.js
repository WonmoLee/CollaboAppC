/**
 * Author: wonmoLee 
 * Date: 2022.05.31
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

exports.createSocket = (io, socketURL, socketOptions)=>{
    return io(socketURL, socketOptions);
}

exports.addHandlers = (socket, win, handlerManager)=>{
    handlerManager.forEach(handler=>{
        socket.on(handler.event, handler.handler.bind(null, socket, win));
    });
}