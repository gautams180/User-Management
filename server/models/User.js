// const {Sequelize, DataTypes} = require('sequelize');
import { Sequelize, DataTypes } from "sequelize";
// const sequelize = new Sequelize();

export const createUserModel = async (sequelize) => {
    const User = sequelize.define(
        //Model Name
        'User',     
        //Attributes                   
        {      
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                isLowercase: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            confirmPassword: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            token: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: "user"
        }
    );
    return User;
}
