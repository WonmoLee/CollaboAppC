/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function ListFriendRequestDialog(document) {
    if(!(this instanceof ListFriendRequestDialog)) {
        throw new Error('must be created with new keyword');
    };
    const Button = require('./button');
    this.view = document.getElementById('listFriendRequestDialogWrapper');
    this.items = document.getElementById('friendRequestList');
    this.ItemFactory = undefined;
    this.CloseButton = new Button(document.getElementById('listFriendCloseButton'));
    this.eventListener = undefined;
};

ListFriendRequestDialog.prototype.show = function() {
    this.view.classList.toggle('show');
    return Promise.resolve();
};

ListFriendRequestDialog.prototype.dismiss = function() {
    this.view.classList.toggle('show');
}

ListFriendRequestDialog.prototype.setSelectListener = function(listener) {
    if(this.eventListener) {
        this.items.removeEventListener('click', this.eventListener);
    };
    this.eventListener = listener;
    this.items.addEventListener('click', this.eventListener);
};

ListFriendRequestDialog.prototype.setCloseListener = function(listener) {
    this.CloseButton.setEventListener(listener);
};

ListFriendRequestDialog.prototype.addItem = function (message) {

};

ListFriendRequestDialog.prototype.removeAllItem = function() {

};

ListFriendRequestDialog.prototype.excuteLoader = function(id) {

};

ListFriendRequestDialog.prototype.removeItem = function(id) {

}

module.exports = ListFriendRequestDialog;