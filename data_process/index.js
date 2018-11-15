module.exports = {
    writeInflux:function (db, obj) {
        db.writePoints([
            {
                measurement: obj.measurement,
                tags: obj.tags,
                fields: obj.fields
            }
        ])
    }
};