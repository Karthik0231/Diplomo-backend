import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const SECRETKEY= 'MysecretKey'

export const registerUser = async(req, res) => {
    try {
        const {username, useremail, userphone, userpassword} = req.body;

        //validations
        const existingUser = await User.findOne({email:useremail});
        if(existingUser){
            return res.status(500).json({
                success: false,
                message:"User already exist with this email!"
            })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(userpassword,10)    

        const newUser = await User.create({
            name: username,
            email: useremail,
            phone: userphone,
            password: hashedPassword
        })
        res.status(201).json({
            success: true,
            message:"User Registration done!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export const userLogin = async(req, res)=>{
    try {
        const {useremail, userpassword } = req.body;

        const userData = await User.findOne({email:useremail});
        if(!userData){
            return res.status(500).json({
                success: false,
                message:"User not Found!"
            })
        }

        const isPasswordMatch = await bcrypt.compare(userpassword, userData.password);
        if(!isPasswordMatch){
            return res.status(500).json({
                success: false,
                message:"Invalid Password"
            })
        }

        //token generate
        // const token = await jwt.sign({payload}, SECRETKEY, {expiry})
        const token = await jwt.sign({id:userData._id, name:userData.name}, SECRETKEY)

        res.status(200).json({
            success:true,
            message:"Login Successfull!",
            token : token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message:"Internal Server Error!"
        })
    }
}