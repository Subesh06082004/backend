    const express = require('express');
    const Router = express.Router();
    const productController = require("../controllers/productController");
    const Auth = require("../middlewares/auth")

    Router.get('/',productController.getAllproducts)
    Router.post('/products',productController.createProduct)
    
    module.exports =  Router;