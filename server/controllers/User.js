import { UserModel } from "../config/database.js"
import bcrypt from 'bcrypt'

export const getUser = async(req,res) => {
    try {
        const {
            id
        } = req.body;
        const user = await UserModel.findOne({ where: { id: id } });
        console.log("User: ", user);
        if(!user) {
            return res.status(500).json({
                success: false,
                message: "User not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "User Found",
            data: user,
        })
    }   
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while fetching users"
        })
    }
}

export const getAllUsers = async(req,res) => {
    try {
        const users = await UserModel.findAll();
        console.log("Users: ",users)
        if(users.length == 0) {
            return res.status(500).json({
                success: false,
                message: "No users found",
            })
        }

        return res.status(200).json({
            success: true,
            data: users,
        })
    }   
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success:false,
            message: "Error while fetching users"
        })
    }
}

export const deleteUser = async(req,res) => {
    try {
        const {
            id
        } = req.body;

        if( !id ) {
            return res.status(500).json({
                success: false,
                message: "Id missing"
            })
        }

        const user = await UserModel.destroy({ where: { id: id } });
        console.log("User: ", user);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Error while deleting user"
        })
    }
}

export const updateUserDetails = async(req,res) => {
    try {
        const {
            id,
            firstName,
            lastName,
        } = req.body;


        const result = await UserModel.update({
            firstName: firstName,
            lastName: lastName,
        },
        {
            where: { id: id },
        });

        const user = await UserModel.findOne({ where: { id: id } });

        console.log("Updated user: ",user);

        return res.status(200).json({
            success: true,
            message: "User details updated successfully",
            user
        })

    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Error while updating user details"
        })
    }
}