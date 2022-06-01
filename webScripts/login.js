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
    const signInButton = document.getElementById('button-SignIn');
    const signUpButton = document.getElementById('button-SignUp');

    signInButton.addEventListener('click', ()=>{
        console.log('click');
        const id = userIdInput.value;
        const password = userPasswordInput.value;
        const parameter = {
            id: id,
            password: password
        };
        ipcRenderer.send('signInRequest', parameter);
    });
    ipcRenderer.on('signInRequest-Success', (event, message)=>{
        console.log(message);
        alert(message.statusText);
    });
    ipcRenderer.on('signInRequest-Failed', (event, message)=>{
        console.log(message);
        alert(message.statusText);
    });
    signUpButton.addEventListener('click', ()=>{
        ipcRenderer.send('displaySignUpModal');
    });
})();