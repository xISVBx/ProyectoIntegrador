import { Sequelize, DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"

export const Vehiculos_motor = sequelize.define('vehiculos_motor',{
    vehiculos_motor_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vehiculos_motor_nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
})