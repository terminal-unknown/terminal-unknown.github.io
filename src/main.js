/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */


var http = require('http');
http.create(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("hello world");
}).listen(8383);

exports.configMain = function(config){
    config.init({
        
        
    });
};