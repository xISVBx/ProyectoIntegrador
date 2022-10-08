import { Sequelize, DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Vehiculos_categoria = sequelize.define('vehiculos_categoria',{
    vehiculos_categoria_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vehiculos_categoria_nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
})