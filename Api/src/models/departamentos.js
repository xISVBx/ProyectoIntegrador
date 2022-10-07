import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Departamentos = sequelize.define('departamentos',{
    id_departamento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_ciudad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    departamento:{
        type: DataTypes.STRING(25),
        allowNull: false
    }
});


