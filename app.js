const express = require('express');
const app=express();
const productRoutes = require("./routes/productRoutes")
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes')
// const jsonSyntaxErrorHandler = require('./middlewares/errorHandler');
const cors =require("cors");


const mongoose=require("mongoose")
app.use(express.json())
app.use(cors());


mongoose.connect("mongodb+srv://subesh:subesh@cluster0.eupjtia.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB")
})

app.set('view engine',"ejs");
//Use product routes
app.use("/",productRoutes)
//Use user routes
app.use('/api/users', userRoutes);
// Use cart routes
app.use('/api/cart', cartRoutes);
//User order routes
app.use('/api/order', orderRoutes);
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("Server is running on port 3000")     
})









