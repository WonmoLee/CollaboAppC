/**
 * Author: wonmoLee 
 * Date: 2022.06.10
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

function TokenManager() {
    if(!(this instanceof TokenManager)) {
        throw new Error('Must be created with new key word');
    };
    let id;
    let refreshToken;
    this.setId = (userId)=>{
        id = userId;
    };
    this.getId = ()=>{
        return id;
    };
    this.getToken = ()=>{
        return refreshToken;
    };
    this.setToken = (token)=>{
        refreshToken = token;
    };
};

module.exports = TokenManager;