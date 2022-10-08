import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Vehiculos_marca =sequelize.define('vehiculos_marca',{
    vehiculos_marca_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    vehiculos_marca_nombre:{
        type: DataTypes.STRING(20),
        allowNull:false
    }
})