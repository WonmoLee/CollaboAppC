/**
 * Author: wonmoLee 
 * Date: 2022.06.10
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (socket, win, TokenManager, message)=>{
    win.webContents.send('receiveMessage', message);
}