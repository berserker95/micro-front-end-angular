const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userPayments = require('../server/data/payments');

server.get('/api/payments', (req, res, next) => {
  res.status(200).send(userPayments.getUserPayments);
});

server.listen(3000, () => {
   console.log('JSON server is running');
})
