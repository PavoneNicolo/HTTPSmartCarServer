const restify = require('restify');
const server = restify.createServer();
const config = require('./config');
const process = require('./data_process');
const db = config.influxConfig();

server.use(restify.plugins.bodyParser());

//utile per ricevere coda, elaborare dati e scriverli su influx
server.post('/data', function(req, res, next) { //fare post su numero di telaio /cars/:numTelaio/data

    //processare dati tramite funzioni presenti su data process
    process.writeInflux(db, obj);
    /*db.writePoints([
        {
            measurement: 'test_measure',
            tags: { tag1: "test_tag"},
            fields: { field1: "test_field"}
        }
        ])*/
    console.log(req.body);
    res.send("write success");
    return next();
});

server.get('/cars', function(req, res, next) {
    res.send('opcroido');
    return next();
});

server.get('/cars/:plate', function(req, res, next) {
    res.send('Current values for car ' + req.params['plate'] + ': [TODO]');
    return next();
});



server.post('/cars/:plate', function(req, res, next) {
    res.send('Data received from plate [TODO]');

    // uncomment to see posted data
    //console.log(req.body);

    return next();
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
