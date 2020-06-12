const MongoClient = require('mongodb').MongoClient;
const localURL = "mongodb://127.0.0.1:27017";
const cloudURL = "<<<<CLOUD URL>>>>>";
const client = new MongoClient(localURL, { useNewUrlParser: true });

const dbName = 'employeeportal';
let _db;

// create a database connection
let createDatabaseConnection = (callback) => {
    MongoClient.connect(localURL).then((mClient) => {
        _db = mClient.db(dbName);
        console.log('Database connection is done successful');
        callback();
    }).catch((err) => {
        console.error(err);
        throw  err;
    });
};

let getDBConnectionObject = () => {
    if(_db){
        return _db;
    }
    else{
        throw new Error('NO DATABASE CONNECTION IS FOUND');
    }
};

module.exports = {
    createDatabaseConnection,
    getDBConnectionObject
};
