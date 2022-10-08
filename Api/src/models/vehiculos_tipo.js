import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Vehiculos_tipo = sequelize.define('vehiculos_tipo',{
    vehiculos_tipo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehiculos_tipo_nombre:{
        type: DataTypes.STRING(20),
        allowNull: false
    }
})