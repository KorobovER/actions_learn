import http from 'http';
import { parse } from 'url';

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/metrics') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Metrics received:', body);
      res.writeHead(200);
      res.end('Metrics collected');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9091, () => {
  console.log('Metrics server listening on port 9091');
});