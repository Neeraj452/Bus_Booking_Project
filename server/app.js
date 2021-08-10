const dotenv =require("dotenv");
const express = require('express');
const mongoose = require('mongoose');

const app = express();

dotenv.config({path:'./config.env'});

require('./db/connection');
app.use(express.json())

const User = require('./model/userSchema');

// we link the router files to make our route easy
app.use(require('./router/router'));

const port = process.env.PORT;
//middelware


app.listen(port,()=>{
      console.log(`server start at ${port}`);
})