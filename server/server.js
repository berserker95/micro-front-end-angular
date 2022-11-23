const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const services = require('./data/services');

server.get('/api/payments', (req, res, next) => {
  res.status(200).send(services.getUserPayments);
});

server.get('/api/contacts', (req, res, next) => {
  res.status(200).send(services.getUserContacts);
});



server.listen(3000, () => {
   console.log('JSON server is running');
})
