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

function ChatArea(document) {
  if(!(this instanceof ChatArea)){
    throw new Error('must be created with new keyword');
  }
  const MessageList = require('./MessageList');
  const MessageInputView = require('./MessageInputView');
  const NotificationList = require('./NotificationList');
  this.MessageList = new MessageList(document);
  this.NotificationList = new NotificationList();
  this.MessageInputview = new MessageInputView(document);

}

module.exports = ChatArea;