import express from 'express';
import {connect} from './config/databse.js';
const app = express();

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');
});  