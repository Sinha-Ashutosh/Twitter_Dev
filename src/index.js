const express = require('express');
const connect = require('./config/databse');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');
    // const tweets = await Tweet.find({
    //     content: ["First tweet", "my tweet"]
    // });
    // console.log(tweets);
})