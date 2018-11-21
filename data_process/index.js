module.exports = {
    influxFields: function (data) {
        //todo formattare dati in modo generico
        return "{\"temperature\":" + data.Temperature + ",\"speed\":" + data.Speed + ",\"gpsLat\":" + data.Gps.lat + ",\"gpsLon\":" + data.Gps.lon + ",\"direction\":\"" + data.Direction + "\"}";
    },
    writeInflux: function (db, data) {
        let influxFields = this.influxFields(data);
        let measurement = data.vinNumber;
        let timestamp = data.Timestamp;
        db.writePoints([
            {
                measurement: measurement,
                fields: JSON.parse(influxFields),
                timestamp: timestamp
            }
        ])
    }
};