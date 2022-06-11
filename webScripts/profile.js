/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function Profile(document) {
    if(!(this instanceof Profile)) {
        throw new Error('must be created with new keyword');
    };
    this.view = document.getElementById('profile');
};

Profile.prototype.setName = function(name) {
    this.view.innerText = name;
};

Profile.prototype.getName = function() {
    return this.view.innerText;
};

module.exports = Profile;