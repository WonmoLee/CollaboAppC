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

module.exports = (mainEvent,socket,TokenManager,event,message)=>{
  const SuccessString = '-Success';
  const FailureString = '-Failure';
  message.token = TokenManager.getToken();
  socket.emit(mainEvent,message,(result)=>{
    console.log(`${mainEvent} result is ${result} \n isSuccess : ${result.isSuccess}`);
    result.isSuccess===true?event.sender.send(mainEvent+SuccessString,result):event.sender.send(mainEvent+FailureString,result);
  });
};