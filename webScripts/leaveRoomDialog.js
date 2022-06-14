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

function LeaveRoomDialog(document) {
  if(!(this instanceof LeaveRoomDialog)){
    throw new Error('must be created with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('leaveRoomDialogWrapper');
  this.confirmButton = new Button(document.getElementById('leaveConfirmButton'));
  this.cancelButton = new Button(document.getElementById('leaveCancelButton'));
}

LeaveRoomDialog.prototype.show = function () {
  this.view.classList.toggle('show');
  return Promise.resolve();
};

module.exports = LeaveRoomDialog;