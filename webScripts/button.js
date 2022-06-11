/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function Button(element) {
    if(!(this instanceof Button)) {
        throw Error('must be created with new keyword');
    };
    this.view = element;
    this.eventListener = undefined;
}

Button.prototype.setEventListener = function(listener) {
    if(this.eventListener) {
        this.view.removeEventListener('click', this.eventListener);
    };
    this.eventListener = listener;
    this.view.addEventListener('click', this.eventListener);
}

module.exports = Button;