/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function InviteRoomDialog(document) {
    if(!(this instanceof InviteRoomDialog)) {
        throw new Error('must be created with new keyword');
    };
    const Button = require('./button');
    this.view = document.getElementById('inviteRoomDialogWrapper');
    this.userIdInput = document.getElementById('input-userId');
    this.confirmButton = new Button(document.getElementById('inviteConfirmButton'));
    this.cancelButton = new Button(document.getElementById('inviteCancelButton'));
};

InviteRoomDialog.prototype.show = function() {
    this.view.classList.toggle('show');
    return Promise.resolve();
};

InviteRoomDialog.prototype.getUserId = function() {
    return this.userIdInput.value;
};

module.exports = InviteRoomDialog;