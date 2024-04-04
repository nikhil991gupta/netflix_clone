import { User } from "../models/userModel.js";
import bycrptjs from"bcryptjs";
import jwt from "jsonwebtoken"

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email Id",
                success: false
            });
        }
        // Compare passwords without bcrypt (not recommended)
        if (password !== user.password) {
            return res.status(401).json({
                message: "Invalid Password",
                success: false
            });
        }
      
        return res.status(200).json({
            message: `Welcome back ${user.fullName}`,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};



export const Logout = async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOonly:true}).json({
        message:"Logged out successfully.",
        success:true
    })
}

export const Register= async(req,res)=> {
try{
    const{fullName, email, password}=req.body;
    console.log(req.body);
    if(!fullName || !email || !password){
        return res.status(401).json(
            {
                message: "Invalid Data",
                success:false
            }
        )
    }
    const user= await User.findOne({email});
    if(user)
    {
        return res.status(401).json(
            {
                message: "This email is already registered",
                success:false
            }
        )

    }

    const hasedpassword = await bycrptjs.hash(password,16);
    await User.create({
        fullName,
        email,
        password:password
    });
    res.status(200).json(
        {
            message: "Account Created Successfully"
        }
    )
}
catch(error){
console.log(error);
}
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}