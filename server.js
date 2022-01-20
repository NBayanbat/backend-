
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200);
//     response.write('<h1>Heloo node!!!</h1>\n');
//     response.end();
// }).listen(65535);
// console.log('server running at http://localhost:3000')


var http = require('http');
http.request({
    host: "52.221.191.153",
    method: "GET",
    path: "/api/foods"
}, function (response) {
    response.setEncoding("utf8");
    response.on("readable", function () {
        console.log(JSON.parse(response.read()))
    })
}).end()