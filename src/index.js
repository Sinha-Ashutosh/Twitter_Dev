const express = require('express');
const connect = require('./config/databse');
const app = express();

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');
});  