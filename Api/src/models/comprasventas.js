import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Comprasventas = sequelize.define('comprasventas',{
    id_venta:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_cliente:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_empleado:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_vehiculo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fecha_venta:{
        type:DataTypes.DATE,
        allowNull:false
    },
    total:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
})