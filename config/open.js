/**
 * Created by slashhuang on 16/8/22.
 * 自动打开浏览器
 */

var open = require('open');
module.exports = function (args) {
    var delay = args.delay||3000,
        url = args.url||"",
        port = args.port;
    setTimeout(function(){
        open('http://localhost:'+port+url);
    },delay);
};
