const influx = require('influx');
module.exports = {
    influxConfig: function () {
        return new influx.InfluxDB({
            host: 'localhost',
            database: 'cars_data',
            port: 8086
        })
    }
};