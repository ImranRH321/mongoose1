/* ========================>❤<===================== */
const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');


// middleware 
app.use(express.json())
app.use(cors())


app.get('/', (_req, res) => {
    res.send("router is working YAY")
})

module.exports = app;

