const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');


const app = require('./app')

// mongoose.connect('mongodb://localhost:27017/test'); 
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('successfully database connect');
})

// server 
const port = process.env.PORT || 8080;


app.listen((port), () => {
    console.log(`successfully server run https://localhost:${port}`
)})








// https://drive.google.com/file/d/1IgeYETqMZSf0SatL4fePhPIwNsllKS9n/view
// Tahmina Begum8:01 PM
// https://zety.com/blog/web-developer-cover-letter-example
// Tahmina Begum8:03 PM
// https://resumelab.com/cover-letter-examples/web-developer
// https://www.greatsampleresume.com/cover-letter/examples/web-development/web-developer/junior
// https://www.resumebuilder.com/web-developer-cover-letter-examples/
// https://www.liveabout.com/front-end-web-developer-cover-letter-and-resume-examples-2060131
// https://www.betterteam.com/web-developer-cover-letter
// https://www.getcoverletter.com/cover-letter-examples/junior-web-developer/
// https://www.getcoverletter.com/cover-letter-examples/junior-web-developer/
// https://www.getcoverletter.com/cover-letter-examples/junior-web-developer/
// Tahmina Begum8:13 PM
// https://www.linkedin.com/jobs/view/3237654089
// Tahmina Begum8:21 PM
// https://www.linkedin.com/jobs/view/3251966650
// https://www.linkedin.com/jobs/view/3083365161
// https://www.linkedin.com/jobs/view/3263412969
// https://www.linkedin.com/jobs/view/3250551567