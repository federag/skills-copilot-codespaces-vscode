// Create web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url === '/comments') {
    fs.readFile('./comments.html', function (err, data) {
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
