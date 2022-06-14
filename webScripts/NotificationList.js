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

function NotificationList() {
  if(!(this instanceof NotificationList)){
    throw new Error('must be created with new keyword');
  }
}

NotificationList.prototype.createNotification = function (item) {
  return new Promise((resolve,reject)=>{
    const title = item.sender.id;
    const options = {
      body:item.message,
      data:{
        room:item.room,
        sender:item.sender
      }
    };
    item === undefined?reject():resolve(new Notification(title,options));
  });
};
NotificationList.prototype.createRoomNotification = function (item) {
  return new Promise((resolve,reject)=>{
    const title = `${item.sender.id}님이 ${item.room.roomName}에 초대하셨습니다.`;
    const options = {
      body:item.message,
      data:{
        room:item.room,
        sender:item.sender
      }
    };
    item === undefined?reject():resolve(new Notification(title,options));
  });
};

module.exports = NotificationList;