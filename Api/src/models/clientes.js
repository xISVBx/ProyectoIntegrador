import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Departamentos } from "./departamentos.js";

export const Clientes = sequelize.define('clientes',{
    id_cliente:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_departamento:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cedula:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    celular:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
Departamentos.hasMany(Clientes,{
    foreignKey: 'id_departamento',
    sourceKey: 'id_departamento'
    
});
Clientes.belongsTo(Departamentos,{
    foreignKey: 'id_departamento',
    targetId: 'id_departamento'
})