/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function ListFriendDialog(document) {
    if(!(this instanceof ListFriendDialog)) {
        throw new Error('must be created with new keyword');
    };
    const Button = require('./button');
    this.view = document.getElementById('listFriendDialogWrapper');
    this.items = document.getElementById('friendList');
    this.ItemFactory = undefined;
    this.CloseButton = new Button(document.getElementById('listCancelButton'));
    this.eventListener = undefined;
};

ListFriendDialog.prototype.show = function() {
    this.view.classList.toggle('show');
    return Promise.resolve();
};

ListFriendDialog.prototype.dismiss = function() {
    this.view.classList.toggle('show');
}

ListFriendDialog.prototype.setSelectListener = function(listener) {
    if(this.eventListener) {
        this.items.removeEventListener('click', this.eventListener);
    };
    this.eventListener = listener;
    this.items.addEventListener('click', this.eventListener);
};

ListFriendDialog.prototype.setCloseListener = function(listener) {
    this.CloseButton.setEventListener(listener);
};

ListFriendDialog.prototype.addItem = function (message) {

};

ListFriendDialog.prototype.removeAllItem = function() {

};

ListFriendDialog.prototype.excuteLoader = function(id) {

};

ListFriendDialog.prototype.removeItem = function(id) {

}

module.exports = ListFriendDialog;