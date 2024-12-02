// const {Sequelize} = require('sequelize');
import { Sequelize } from 'sequelize';
import { createUserModel } from '../models/User.js';

const sequelize = new Sequelize('SsLogin', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

let UserModel = null;

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUserModel(sequelize);
        await sequelize.sync({ alter: true });
        console.log("Database Synced");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {connection, UserModel}



// exports.connection = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         userModel = await createUserModel(sequelize);
//         // await sequelize.sync();
//         console.log("Database Synced");
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }
