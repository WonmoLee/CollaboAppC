/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function ChatArea(document) {
    if(!(this instanceof ChatArea)) {
        throw new Error('must be created with new keyword');
    };
    const MessageList = require('./messageList');
    const MessageInputView = require('./messageInputView');

    this.MessageList = new MessageList(document);
    this.MessageInputView = new MessageInputView(document);
};

module.exports = ChatArea;