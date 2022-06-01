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
    ipcRenderer.on(socketEvent.HELLO, (event, message)=>{
        console.log(message);
    });
    const userIdInput = document.getElementById('user-id-input');
    const userPasswordInput = document.getElementById('user-password-input');
    const cancelButton = document.getElementById('button-Cancel');
    const signUpButton = document.getElementById('button-SignUp');

    cancelButton.addEventListener('clcik', ()=>{
        ipcRenderer.send('destroySignUpModal');
    });
    signUpButton.addEventListener('clcik', ()=>{
        console.log('click');
        const id = userIdInput.value;
        const password = userPasswordInput.value;
        const parameter = {
            id: id,
            password: password
        };
        ipcRenderer.send('signUpRequest', parameter);
    });
    ipcRenderer.on('signUpRequest-Success', (event, message)=>{
        console.log(message);
        alert(message.statusText);
    })
    ipcRenderer.on('signUpRequest-Failed', (event, message)=>{
        console.log(message);
        alert(message.statusText);
    })
})();