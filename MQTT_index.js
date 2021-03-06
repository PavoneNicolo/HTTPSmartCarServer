const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');
const config = require('./config');
const process = require('./data_process/influx_utility.js');
const db = config.influxConfig('localhost', 'cars_data', 8086);

client.on('connect', function () {
    client.subscribe('kitt/cars/+/temperature', function (err) {
        //test publish
        if (!err) {
            client.publish('kitt/cars/123/speed', '{"value":23.5, "timestamp":1234567}'); //formato dati per publisher
        }
    });
    client.subscribe('kitt/cars/+/speed');
    client.subscribe('kitt/cars/+/GPS/lat');
    client.subscribe('kitt/cars/+/GPS/lon');
});

client.on('message', function (topic, message) {
    let body = JSON.parse(message.toString());
    let split_topic = topic.split("/");
    let measure_type = split_topic[split_topic.length - 1];
    let carID = split_topic[2];
    let field = {
        "fldName": measure_type,
        "value": body.value
    };
    //This data format follows writeInflux() specifications
    let data = {
        vinNumber: carID,
        fields: [field],
        Timestamp: body.timestamp
    };

    console.log(data);

    try {
        process.writeInflux(db, data);
    }
    catch (e) {
        console.log("Errore scrittura su InfluxDB");
    }
});