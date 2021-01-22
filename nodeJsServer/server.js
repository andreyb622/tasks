const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const users = [
  {
    name: 'Ruslan'
  },
  {
    name: 'Lan'
  },
  {
    name: 'Rus'
  }
];

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    switch(req.method) {
      case 'GET':
        res.end(console.log(users))
        break;
      case 'POST':
        users.push({name: 'qwe'})
        res.end(console.log(users))
        break;
      case 'PUT':
        users.splice(1,1)
        res.end(console.log(users))
        break;
    }
  } else {
    res.statusCode = 404;
    res.end('error123')
  }

  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

server.listen(port, hostname, () => {
  console.log(`server run at http://${hostname}:${port}/`)
})