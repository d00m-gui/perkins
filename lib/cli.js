var colors = require('colors');

module.exports = function () {
    var appname = function () {
        return 'Perkins: '.grey;
    };

    return {
        msg : function (message) {
            console.log(appname() + message.cyan);
        },
        info : function (message) {
            console.log(appname() + message.green);
        },
        error : function (message) {
            console.log(appname() + message.red);
        },
        meta : function (message) {
            console.log(message.rainbow);
        },
    };
};