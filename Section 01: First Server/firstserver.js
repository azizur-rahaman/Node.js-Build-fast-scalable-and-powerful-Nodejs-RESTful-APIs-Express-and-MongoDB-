const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Incoming request');
});

server.listen(3000, () => {
    console.log('Server has started listening on port 3000');
});