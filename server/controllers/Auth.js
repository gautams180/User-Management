import { UserModel } from "../config/database.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET;

export const register = async(req,res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = req.body;

        if( !firstName || !lastName || !email || !password || !confirmPassword ) {
            return res.status(500).json({
                success: false,
                message: "Details missing: " + error.message,
            })
        }

        if (password !== confirmPassword) {
            return res.status(500).json({
                success: false,
                message: "Both Passwords do not match",
            })
        }

        const user = await UserModel.findOne({ where: { email: email } });
        if(user) {
            return res.status(500).json({
                success: false,
                message: "User already present",
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const NewUser = await UserModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email, 
            password: hashedPassword,
            confirmPassword: hashedPassword
        });

        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            data: NewUser,
        })


    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while registering user"
        })
    }
}

export const login = async(req,res) => {
    try {
        const {
            email,
            password
        } = req.body;

        if ( !email || !password ) {
            return res.status(500).json({
                success: false,
                message: "Details missing: " + error.message,
            })
        }

        const user = await UserModel.findOne({ where: { email: email } });
        if(!user) {
            return res.status(500).json({
                success: false,
                message: "User does not exist",
            })
        }
        console.log("User: ",user);

        if(await bcrypt.compare( password, user.password)) {
            console.log("Password match");
            const payload = {
                email: user.email,
                id: user.id
            }
            console.log("After payload")

            //creating jwt
            const token = jwt.sign( payload, "SoftwareSathi" ,{
                expiresIn: "2h"
            })
            console.log("JWT: ",token)

            user.token = token;
            user.password = undefined;
            user.confirmPassword = undefined;

            return res.status(200).json({
                success: true,
                message:"User Logged in",
                token,
                user
            })


        }
    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while logging in"
        })
    }
}