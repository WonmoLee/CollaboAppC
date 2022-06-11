/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function RoomMenuArea(document) {
    if(!(this instanceof RoomMenuArea)) {
        throw Error('must be created with new keyword');
    };
    const RoomMenu = require('./RoomMenu');
    this.MenuList = new RoomMenu(document);
};

module.exports = RoomMenuArea;