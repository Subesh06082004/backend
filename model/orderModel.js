const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    cust_name:{
        type: 'string',
        required: true,
    },
    cust_phno :{
        type: 'string',
        required: true,
    },
    cust_address :{     
        type: 'string',
        required: true,
    },
    OrderDate :{
        type: 'Date',
        required: true,
    },
    Est_Delv_Date:{
        type: 'Date',
        required: true,
    },
    products :[{
        title:"string",
        description:"string",
        image:"string",
        price:'number',
        quantity:'number'
    }],
    total_amount :{
        type:'number',
        required: true,
    },
    order_status:{
        type:'string',
        required:'true'
    },
    user_id:{
        type:'number',
        required:'true'
    },
    user_email:{
        type:'string',
        required:'true'
    }


})

const Order = mongoose.model('Order',orderSchema)

module.exports= Order