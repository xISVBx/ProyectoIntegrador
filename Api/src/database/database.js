import Sequelize from "sequelize";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const sequelize = new Sequelize(
    process.env.BD, 
    process.env.USER, 
    process.env.PASSWORD, 
    {
        
        host: "localhost",
        dialect: "mysql",
        logging: false
        
    }
);
