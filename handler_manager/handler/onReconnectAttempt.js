/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
module.exports = (socket,win,TokenManager)=>{
  const token = TokenManager.getToken();
  const id = TokenManager.getId();
  socket.io.opts.query = {id:id,token:token};
  socket.io.opts.transports = ['websocket'];
};