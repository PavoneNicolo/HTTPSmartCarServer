module.exports = {
    getFields: function (data) {
        let result = "";
        let fieldsLength = data.fields.length;

        //ciclo tutte le misure
        for (let i = 0; i < fieldsLength; i++) {
            //forma valore per formato JSON
            let value = '"' + data.fields[i].fldName + '":' + data.fields[i].value;
            result = result + value + ",";
        }

        //utile ad eliminare l'ultima virgola prima di inserire in influx
        result = result.substring(0, result.length - 1);

        return JSON.parse('{' + result + '}');
        //return "{\"temperature\":" + data.Temperature + ",\"speed\":" + data.Speed + ",\"gpsLat\":" + data.Gps.lat + ",\"gpsLon\":" + data.Gps.lon + ",\"direction\":\"" + data.Direction + "\"}";
    },
    writeInflux: function (db, data) {
        let influxFields = this.getFields(data);
        let measurement = data.vinNumber;
        let timestamp = data.Timestamp;

        db.writePoints([
            {
                measurement: measurement,
                fields: influxFields,
                timestamp: timestamp
            }
        ])
    }
};