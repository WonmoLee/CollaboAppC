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

function ListFriendRequestDialog(document) {
  if(!(this instanceof ListFriendRequestDialog)){
    throw new Error('must be created with new keyword');
  }
  const Button = require('./Button');
  const MessageItemFactory = require('./MessageItemFactory');
  this.view = document.getElementById('listFriendRequestDialogWrapper');
  this.items = document.getElementById('friendRequestList');
  this.ItemFactory = new MessageItemFactory(document);
  this.CloseButton = new Button(document.getElementById('listFriendCloseButton'));
  this.eventListener = undefined;
}

ListFriendRequestDialog.prototype.show = function (ipcRenderer) {
  const message = {};
  this.view.classList.toggle('show');
  ipcRenderer.send('searchFriendRequest',message);
  return Promise.resolve();
};
ListFriendRequestDialog.prototype.dismiss = function () {
  this.view.classList.toggle('show');
};

ListFriendRequestDialog.prototype.setSelectListener = function (listener) {
  if(this.eventListener){
    this.items.removeEventListener('click',this.eventListener);
  }
  this.eventListener = listener;
  this.items.addEventListener('click',this.eventListener);
};
ListFriendRequestDialog.prototype.setCloseListener = function (listener) {
  this.CloseButton.setEventListener(listener);
};
ListFriendRequestDialog.prototype.addItem = function (message) {
  /**
   * @TODO addItem
   */
  const messageItem = this.ItemFactory.createRequestFriendItem(message);
  this.items.appendChild(messageItem);

};
ListFriendRequestDialog.prototype.removeAllItem = function () {
  /**
   * @TODO remove All Item
   */
  const items = this.items;
  return new Promise((resolve,reject)=>{
    if(!items)return reject();
    while(items.firstChild){
      items.removeChild(items.lastChild);
    }
    resolve();
  });
};
ListFriendRequestDialog.prototype.excuteLoader = function (id) {
  /**
   * @TODO excute Loader
   */
  const items = this.items;
  return new Promise((resolve,reject)=>{
    let isExcute = false;
    items.childNodes.forEach(function (element) {
      if(element.id===id){
        isExcute=true;
        element.lastChild.classList.toggle('show');
      }
    })
    isExcute === true?resolve():reject();
  });
};
ListFriendRequestDialog.prototype.removeItem = function (id) {
  /**
   * @TODO remove Item
   */
  this.items.childNodes.forEach(function (element) {
    if(element.id===id){
      element.remove()
    }
  },this);
};

module.exports = ListFriendRequestDialog;