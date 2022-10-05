const http =require('http');

const hostname = '127.0.0.1';
const port = 1337

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("write html code to display you test")
  res.end();
}).listen(port,hostname,() =>{
    console.log(`Server is running at http://${hostname}:${port}/`)
});