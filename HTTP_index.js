const restify = require('restify');
const server = restify.createServer({name: "HTTP API"});
const httpRoute = require('./protocol/HTTP/index.js');

httpRoute.applyRoutes(server, '/http');

server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
    console.log('%s listening at localhost', server.name);
});