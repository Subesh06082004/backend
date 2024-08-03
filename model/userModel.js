// 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique : true,
        required :[true,"email is required"],
    },
    password:{
        type:String,
        required :[true,"password is required"],
    },

});


userSchema.pre('save', async function(next) {
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password,salt);
    next();
})

const user = mongoose.model('user',userSchema)

module.exports = user;