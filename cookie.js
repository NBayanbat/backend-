var http = require('http');
var url = require('url')
http.createServer(function (request, response) {
    var cookies = request.headers.cookie;
    if (!cookies) {
        var cookieText = "it is cookie mofa";
        response.setHeader('Set-Cookie', cookieText);
        console.log("asdadwdawda")
        return response.end();
    } else {
        console.log(cookies);
        console.log("cookies already existed!");

    }
    return response.end("set : " + cookies.toString())
}).listen(8213);
console.log("it works")
