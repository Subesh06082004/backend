const product = require("../model/productModel");
const { v4: uuidv4 } = require('uuid');

const getAllproducts = async (req,res)=> {
    try{
    const products = await product.find();
    res.status(200).json(product);
}
catch(err){
    console.log(err);
}
};

const createProduct = async (req, res) => {
    try {
        const newProduct = new product({
            ...req.body,
            id: uuidv4() 
        });
        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
};

module.exports = {createProduct,getAllproducts};

// module.exports = product

