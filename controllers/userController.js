// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const User = require('../model/userModel');

// exports.login = async(req,res) => {
//     const {email, password} = req.body;
//     const user = await User.findOne({email});
//     try{
//         if(!user){
//             return res.status(404).json({message:"User not found"});
//         }
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if(!isValidPassword){
//             return res.status(401).json({message:"Invalid password"});
//         }
//         const token = jwt.sign({ userId: user._id}, "secret_key",{
//             expiresIn:"1h",
//         });
//         res.json({token});
//     }catch(err){
//         console.log(err);
//     }
// };
// 

const  User  = require('../model/userModel')
const jwt =require("jsonwebtoken")
const bcrypt = require("bcrypt");


const register_User = async(req, res) => {
    const { name , email, password} = req.body;
    const user = await User.findOne({email})
    try{
        if (user) return res.status(409).json({ msg: "Email already registered" });
        const newuser = new User({
            name,
            email,
            password
        })

    
        newuser.save()

        res.status(200).json({
            "status" : "Success",
            "message" : "patient is Registerd"
        })

        
    }catch(err){
        res.status(500).json({
            "status" : "failure",
            "message" : "Patient is not Registerd"
        })

    console.error(err);
    }
}


const login_User = async(req,res) => {
    const {email,password}= req.body
    const user = await User.findOne({email})
try{
    if(!user){
        return res.status(404);

    }
    const isValidPassword = await bcrypt.compare(password,user.password);
    if(!isValidPassword){
        return res.status(401).json({message : "Inavalid password"});

    }
    const token =jwt.sign({userId:user._id},"seceret_key",{
        expiresIn:"1h",
    });
    res.json({
        "status" : "success",
        "message" : "login is successful",
        token});

}catch (err ){
    console.log(err);
    }
};

module.exports = {register_User, login_User}