import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Roles_empleados = sequelize.define('roles_empleados',{
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
})