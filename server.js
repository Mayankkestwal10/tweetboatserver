const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const app = express();
require('dotenv').config();


const authRouter = require('./routes/auth/auth');
const tweetRouter = require('./routes/tweets/tweets');
const followRouter = require('./routes/follow/follow');

mongoose.connect(`${process.env.DB}`,(error, success)=>{
    if(error){
        console.log("Mongodb Error", error);
    }else{
        console.log("Mongodb connected");
    }
});

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(express.json())
app.use(cors())
app.use(morgan('combined', { stream: accessLogStream }))
app.use('/', authRouter);
app.use('/api/tweet', tweetRouter);
app.use('/api', followRouter);



const PORT = process.env.PORT || 5500;

app.listen(PORT, (error, success)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Server up and running", PORT);
    }
});