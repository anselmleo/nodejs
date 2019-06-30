const http = require('http');
const path = require('path');
const fs = require('fs');

// Static urls method

// const server = http.createServer((req, res) => {
//   fs.readFile(path.join(__dirname,'/public','index.html'), (err, content) => {
//     if(err) throw err;
//     res.end(content);
//   });
// });
// PORT = process.env.port || 5000;
// server.listen(PORT, () => {
//   // console.log('Port: '+ PORT + ' server running');
//   console.log('server running on port '+PORT);
// });

// Dynamic urls method
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  let ext = path.extname(filePath);

  let contentType = 'text/html';

  switch (ext) {
    case '.js':
      contentType = 'text/javascript';
      break;
    
    case '.css':
      contentType = 'text/css';
      break;
    
    case '.json':
      contentType = 'application/json';
      break;
    
    case '.png':
      contentType = 'image/png';
      break;
    
    case '.jpg':
      contentType = 'image/jpg';
      break;

    default:
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        fs.readFile(path.join(__dirname,'public','404.html'),(err, content) => {
          res.writeHead(400, {'Content-Type':'text/html'});
          res.end(content);
        }) 
      } else {
        res.writeHead(500);
        res.end(err.code);
      }
    } else {
      res.writeHead(200, {'contentType':contentType});
      res.end(content);
    }
  });

});

PORT = process.env.port || 7000;

server.listen(PORT, ()=>{
  console.log('server running on port:'+PORT);
});
