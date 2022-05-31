/**
 * Author: wonmoLee 
 * Date: 2022.05.31
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

const SocketEvent = require('./event/socketEvent');

module.exports = [
    {
        event: SocketEvent.CONNECT,
        handler: require('./handler/onConnect')
    },
    {
        event: SocketEvent.CONNECT_TIMEOUT,
        handler: require('./handler/onConnectTimeout')
    },
    {
        event: SocketEvent.DISCONNECT,
        handler: require('./handler/onDisconnect')
    },
    {
        event: SocketEvent.HELLO,
        handler: require('./handler/onHello')
    },
    {
        event: SocketEvent.PING,
        handler: require('./handler/onPing')
    },
    {
        event: SocketEvent.PONG,
        handler: require('./handler/onPong')
    },
    {
        event: SocketEvent.RECONNECT_ERROR,
        handler: require('./handler/onReconnectError')
    },
    {
        event: SocketEvent.RECONNECT_FAILED,
        handler: require('./handler/onReconnectFailed')
    },
    {
        event: SocketEvent.RECONNECTING,
        handler: require('./handler/onReconnecting')
    },
]