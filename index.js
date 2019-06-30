const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname,'/public','index.html'), (err, content) => {
    if(err) throw err;
    res.end(content);
  });
});
PORT = process.env.port || 5000;
server.listen(PORT, () => {
  // console.log('Port: '+ PORT + ' server running');
  console.log('server running on port '+PORT);
});