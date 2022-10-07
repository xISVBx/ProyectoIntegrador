import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Departamentos} from "./departamentos.js"

export const Ciudades = sequelize.define('ciudades',{
    id_ciudad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ciudad:{
        type: DataTypes.STRING(25),
        allowNull: false
    }

});

Ciudades.hasMany(Departamentos,{
    foreignKey: 'id_ciudad',
    sourceKey: 'id_ciudad'
    
});
Departamentos.belongsTo(Ciudades,{
    foreignKey: 'id_ciudad',
    targetId: 'id_ciudad'
})
