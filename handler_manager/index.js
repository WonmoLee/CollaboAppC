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
const dict = [];

dict[SocketEvent.CONNECT] = {
    type: 0,
    event: SocketEvent.CONNECT,
    handler: require('./handler/onConnect')
};
dict[SocketEvent.ERROR] = {
    type: 1,
    event: SocketEvent.ERROR,
    handler: require('./handler/onError')
};
dict[SocketEvent.CONNECT_TIMEOUT] = {
    type: 0,
    event: SocketEvent.CONNECT_TIMEOUT,
    handler: require('./handler/onConnectTimeout')
};
dict[SocketEvent.DISCONNECT] = {
    type: 1,
    event: SocketEvent.DISCONNECT,
    handler: require('./handler/onDisconnect')
};
dict[SocketEvent.HELLO] = {
    type: 0,
    event: SocketEvent.HELLO,
    handler: require('./handler/onHello')
};
dict[SocketEvent.PING] = {
    type: 0,
    event: SocketEvent.PING,
    handler: require('./handler/onPing')
};
dict[SocketEvent.PONG] = {
    type: 0,
    event: SocketEvent.PONG,
    handler: require('./handler/onPong')
};
dict[SocketEvent.RECONNECT_ERROR] = {
    type: 0,
    event: SocketEvent.RECONNECT_ERROR,
    handler: require('./handler/onReconnectError')
};
dict[SocketEvent.RECONNECT_FAILED] = {
    type: 0,
    event: SocketEvent.RECONNECT_FAILED,
    handler: require('./handler/onReconnectFailed')
};
dict[SocketEvent.RECONNECTING] = {
    type: 0,
    event: SocketEvent.RECONNECTING,
    handler: require('./handler/onReconnecting')
};
dict[SocketEvent.RECONNECT_ATTEMPT] = {
    type: 1,
    event: SocketEvent.RECONNECT_ATTEMPT,
    handler: require('./handler/onReconnectAttempt')
};
dict[SocketEvent.RECONNECT] = {
    type: 1,
    event: SocketEvent.RECONNECT,
    handler: require('./handler/onReconnect')
};
dict[SocketEvent.TOKENREFRESHREQUIRED] = {
    type: 1,
    event: SocketEvent.TOKENREFRESHREQUIRED,
    handler: require('./handler/onTokenRefreshRequired')
};
dict[SocketEvent.BROADCAST_MESSAGE] = {
    type: 1,
    event: SocketEvent.BROADCAST_MESSAGE,
    handler: require('./handler/onBroadcastMessage')
};
dict[SocketEvent.RECEIVE_INVITEUSER] = {
    type: 1,
    event: SocketEvent.RECEIVE_INVITEUSER,
    handler: require('./handler/onReceiveInviteUser')
};

module.exports = dict;