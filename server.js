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

