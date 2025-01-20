const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
  // Ensure resources are closed to prevent leaks
  request.on('close', () => {
    // Any cleanup code here
  });
};

const server = http.createServer(requestListener);

server.listen(8080);