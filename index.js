const restify = require('restify');
const server = restify.createServer({name: "HTTP API"});
const config = require('./config');
const process = require('./data_process');
const db = config.influxConfig('localhost', 'cars_data', 8086);

server.use(restify.plugins.bodyParser());

//utile per ricevere coda, elaborare dati e scriverli su influx
server.post('/cars/:vinNumber/data', function (req, res, next) {
    let data = JSON.parse(req.body);
    data.vinNumber = req.params.vinNumber;

    try {
        process.writeInflux(db, data);
        res.send(200);
    }
    catch (e) {
        res.send(500);
    }

    return next();
});

server.listen(8080, function () {
    console.log('%s listening at localhost', server.name);
});