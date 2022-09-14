/* ========================>❤<===================== */
const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');


// middleware 
app.use(express.json())
app.use(cors())

// Schema Designe 
const productSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true, "name mast be required"],
        trim: true,
        unique: [true, "name is unique"],
        minLength: [5 , 'Mast be 3 least name for this product'],
        maxLength: [40, "name is too large"]
    }, 
    description: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true,
        min: [0, "price is can  negative"]
    }, 
    unit: {
        type: String,
        required: true,
        enum: {
            value: ["kg", "liter", "pcs"], 
            message: "unique value can n't {value} must be kg/liter/pcs"
        }
    }, 
    quantity: {
        type: Number, 
        required: true, 
        min: [0, "can be value is negative"], 
        validate: {
            validator: (value) => {
              const isInteger = Number.isInteger(value)
              if(isInteger){
                return isInteger
              }
              else{
               return isInteger
              }
            }
        },
        message: "quantity mast be an integer"
    },
    status: {
        type: Number,
        required: true,
        enum: {
            value: ["in-stock", "out-of-stock","discontinued"],
            message: "status can n't be {VALUE}"
        }
    },
    // createAt: {
    //     type: String, 
    //     default: Date.now 
    // },
    // updateAt: {
    //     type: String,
    //     default: Date.now 
    // }, 
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    categories: [{
        name: {
            type: String,
            required: true
        }, 
        _id: mongoose.Schema.Types.ObjectId
    }]
}, {
     timestamps: true, 
})


app.get('/', (_req, res) => {
    res.send("router is working YAY")
})

module.exports = app;