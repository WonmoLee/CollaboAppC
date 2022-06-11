/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function FriendMenuDialog(document) {
    if(!(this instanceof FriendMenuDialog)) {
        throw new Error('must be created with new keyword');
    };
    const Button = require('./button');
    this.view = document.getElementById('friendMenuDialogWrapper');
    this.MenuList = document.getElementById('friendMenuList');
    this.CloseButton = new Button(document.getElementById('closeFriendMenuDialogButton'));
    this.eventListener = undefined;
    this.CloseListener = undefined;
};

FriendMenuDialog.prototype.show = function() {
    this.view.classList.toggle('show');
    return Promise.resolve();
};

FriendMenuDialog.prototype.openDialog = function(dialog, ipcRenderer) {
    dialog.show(ipcRenderer);
};

FriendMenuDialog.prototype.setSelectListener = function(listener) {
    if(this.eventListener) {
        this.MenuList.removeEventListener('click', this.eventListener);
    };
    this.eventListener = listener;
    this.MenuList.addEventListener('click', this.eventListener);
};

FriendMenuDialog.prototype.setCloseListener = function(listener) {
    this.CloseButton.setEventListener(listener);
};

module.exports = FriendMenuDialog;