var http=require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("<head><meta charset='utf-8' /></head>");
    res.end("<h1>我是谁</h1>\n");
}).listen(8080,"127.0.0.1");
console.log("The port is listenning on port 127.0.0.1")