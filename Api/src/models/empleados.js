import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Empleados = sequelize.define('empleados',{
    id_empleado:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_rol:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    apellido:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    cedula:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    celular:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    contrasena:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    fecha_nacimiento:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fecha_contratacion:{
        type:DataTypes.DATE,
        allowNull:false
    }
})