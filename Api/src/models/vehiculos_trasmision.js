import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const vehiculos_trasmision = sequelize.define('trasmision',{
    vehiculos_trasmision_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehiculos_trasmision_nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})