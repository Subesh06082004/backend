const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
id: {
    type: String,
    required: [true,"id is required"]
},
title: {
    type: String,
},
  description: {
    type: String,
  },
  price:{
    type: Number,
  },
  image:{
    type:String
},
    rating:{
        type: Number,
    },
    count:{
        type:Number
    },
});

module.exports = mongoose.model('Product', productSchema);

// module.exports = product;