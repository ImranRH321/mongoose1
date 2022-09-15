/* ========================>❤<===================== */
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// Schema Designe
// const productSchema =  mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "name mast be required"],
//         trim: true,
//         unique: [true, "name is unique"],
//         minLength: [5 , 'Mast be 3 least name for this product'],
//         maxLength: [40, "name is too large"]
//     },
//     // description: {
//     //     type: String,
//     //     required: true
//     // },
//     price: {
//         type: Number,
//         required: true,
//         min: [0, "price is can  negative"]
//     },
//     unit: {
//         type: String,
//         required: true,
//         enum: {
//             values: ["kg", "liter", "pcs"],
//             message: "unique value can n't {value} must be kg/liter/pcs"
//         }
//     },
//     quantity: {
//         type: Number,
//         required: true,
//         min: [0, "can be value is negative"],
//         Validate: {
//             validator: (value) => {
//               const isInteger = Number.isInteger(value)
//               if(isInteger){
//                 return isInteger
//               }
//               else{
//                return isInteger
//               }
//             }
//         },
//         message: "quantity mast be an integer"
//     },
//     status: {
//         type: Number,
//         required: true,
//         enum: {
//             Value: ["in-stock", "out-of-stock","discontinued"],
//             message: "status can n't be {VALUE}"
//         }
//     },
//      createAt: {
//          type: String,
//          default: Date.now
//      },
//      updateAt: {
//          type: String,
//          default: Date.now
//      },
//     supplier:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Supplier"
//     },
//     categories: [{
//         name: {
//             type: String,
//             required: true
//         },
//         _id: mongoose.Schema.Types.ObjectId
//     }]
// }, {
//      timestamps: true,
// })

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "mast be value negative"],
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "mast gave en value 0 upper"],
    validate: {
      validator: value => {
        const num = parseInt(value);
        if (num) {
          return num;
        } else {
          return num;
        }
      },
    },
  },
});

/* Schema --> Model---> QUERY */

// const Product = mongoose.Model('Product', ProductSchema)
const Product = mongoose.model("Product", ProductSchema);

app.get("/", (_req, res, next) => {
  res.send("router is working YAY");
});
app.post("/api/v1/product", async(req, res, next) => {
  // save or create

  try {
      const product = new Product(req.body);
    /* save data */
        // instance creation ---> do something save
    // const result = await product.save();

    /* create  data */
    // const result = await Product(req.body)  

//    if(product.quantity === 0){
//     product.status('out of stock')
//    }

    console.log('result', result);
    res.status(200).json({
      status: 200,
      messages: "successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "data not inserted",
      error: error.message,
    });
  }
});
// console.log(Product);

module.exports = app;
