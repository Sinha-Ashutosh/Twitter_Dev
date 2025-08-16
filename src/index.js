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
    // const tweet = await Tweet.create({
    //     content: 'Second Tweet',
    //     userEmail: 'a@b.com'
    // });
    //const tweets = await Tweet.find();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('68a09b5eadfef95d87967b7c');
    console.log(tweet);
})