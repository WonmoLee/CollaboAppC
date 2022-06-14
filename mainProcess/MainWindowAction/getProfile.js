/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
module.exports = (MainEvent,TokenManager,event,message)=>{
  event.sender.send(MainEvent,TokenManager.getId());
};