const express = require('express');
const app = express();
require('dotenv').config();
require('./dbConnect/dbConnect.js');
const userRouter = require('./routes/userRoute.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/talent_recruiter',userRouter);

app.listen(5000,()=>{
    console.log("server is running at port 5000");
})