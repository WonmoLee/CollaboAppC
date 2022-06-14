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

function CreateRoomDialog(document) {
  if(!(this instanceof CreateRoomDialog)){
    throw new Error('must be created with new keyword');
  }
  const Button = require('./Button');
  this.view = document.getElementById('createRoomDialogWrapper');
  this.roomNameInput = document.getElementById('input-roomName');
  this.confirmButton = new Button(document.getElementById('createConfirmButton'));
  this.cancelButton = new Button(document.getElementById('createCancelButton'));
}

CreateRoomDialog.prototype.show = function () {
  this.view.classList.toggle('show');
  return Promise.resolve();
};

CreateRoomDialog.prototype.getRoomName = function () {
  return this.roomNameInput.value;
};

module.exports = CreateRoomDialog;