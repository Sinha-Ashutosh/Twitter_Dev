const express = require('express');
const connect = require('./config/databse');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

const { default: mongoose } = require('mongoose');

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');

})