/**
 * Author: wonmoLee 
 * Date: 2022.05.31
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

(()=>{
    const electron = require('electron');
    const ipcRenderer = electron.ipcRenderer;
    const socketEvent = require('././handler_manager/event/socketEvent');
    const DialogFactory = require('././webScripts/dialogFactory');
    const RoomMenuArea = require('././webScripts/roomMenuArea');
    const RoomArea = require('././webScripts/roomArea');
    const ChatArea = require('././webScripts/chatArea')

    const dialogFactory = new DialogFactory(document);
    const roomMenuArea = new RoomMenuArea(document);
    const roomArea = new RoomArea(document);
    const chatArea = new ChatArea(document);

    ipcRenderer.on(socketEvent.HELLO, (event, message)=>{
        console.log(message);
    });

    dialogFactory.getDialog('inviteRoomDialog').confirmButton.setEventListener(()=>{
        dialogFactory.getDialog('inviteRoomDialog').show();
    });
    dialogFactory.getDialog('inviteRoomDialog').cancelButton.setEventListener(()=>{
        dialogFactory.getDialog('inviteRoomDialog').show();
    });
    dialogFactory.getDialog('leaveRoomDialog').confirmButton.setEventListener(()=>{
        dialogFactory.getDialog('leaveRoomDialog').show();
    });
    dialogFactory.getDialog('leaveRoomDialog').cancelButton.setEventListener(()=>{
        dialogFactory.getDialog('leaveRoomDialog').show();
    });
    dialogFactory.getDialog('friendMenuDialog').CloseButton.setEventListener(()=>{
        dialogFactory.getDialog('friendMenuDialog').show();
    });
    dialogFactory.getDialog('addFriendDialog').confirmButton.setEventListener(()=>{
        dialogFactory.getDialog('addFriendDialog').show();
    });
    dialogFactory.getDialog('addFriendDialog').cancelButton.setEventListener(()=>{
        dialogFactory.getDialog('addFriendDialog').show();
    });
    dialogFactory.getDialog('listFriendDialog').CloseButton.setEventListener(()=>{
        dialogFactory.getDialog('listFriendDialog').show();
    });
    dialogFactory.getDialog('listFriendRequestDialog').CloseButton.setEventListener(()=>{
        dialogFactory.getDialog('listFriendRequestDialog').show();
    });
    dialogFactory.getDialog('friendMenuDialog').setSelectListener(()=>{
        if(event.target.tagName === 'LI') {
            if(event.target.id === 'addFriend') {
                dialogFactory.getDialog('friendMenuDialog').openDialog(dialogFactory.getDialog('addFriendDialog'), ipcRenderer);
            } else if(event.target.id === 'showFriends') {
                dialogFactory.getDialog('friendMenuDialog').openDialog(dialogFactory.getDialog('listFriendDialog'), ipcRenderer);
            } else {
                dialogFactory.getDialog('friendMenuDialog').openDialog(dialogFactory.getDialog('listFriendRequestDialog'), ipcRenderer);
            };
        };
    });
    dialogFactory.getDialog('createRoomDialog').confirmButton.setEventListener(()=>{
        dialogFactory.getDialog('createRoomDialog').show();
    });
    dialogFactory.getDialog('createRoomDialog').cancelButton.setEventListener(()=>{
        dialogFactory.getDialog('createRoomDialog').show();
    });

    roomMenuArea.MenuList.setSelectListener(()=>{
        if(event.target.tagName === 'DIV') {
            if(event.target.id === 'inviteRoomButton') {
                dialogFactory.getDialog('inviteRoomDialog').show();
            } else {
                dialogFactory.getDialog('leaveRoomDialog').show();
            }
        };
    });
    roomArea.FriendMenuButton.setEventListener(()=>{
        dialogFactory.getDialog('friendMenuDialog').show();
    });
    roomArea.CreateRoomButton.setEventListener(()=>{
        dialogFactory.getDialog('createRoomDialog').show();
    });
    chatArea.MessageInputView.setSendEventListener(()=>{
        alert(chatArea.MessageInputView.getMessage());
    });
    chatArea.MessageInputView.textArea.addEventListener('keydown',chatArea.MessageInputView.keyDownEventHandler.bind(chatArea.MessageInputView));
})();