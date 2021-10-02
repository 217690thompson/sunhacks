const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://administrator:Sunhacks2021@sunhacks.q40z7.mongodb.net/Sunhacks";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.test = async function () {
    var collection;
    var cursor;
    var res;
    let promise = new Promise(function(resolve) {client.connect(err => {
        collection = client.db("sample_geospatial").collection("shipwrecks");
        // perform actions on the collection object
        resolve(collection);
    })});
    await promise;
    cursor = new Promise(function (resolve) {collection.findOne({}, function(err, result) {
        if (err) throw err;
        res = result;
        client.close();
        resolve(result);
    })});
    await cursor;
    return res;
};
