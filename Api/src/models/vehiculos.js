import { Sequelize, DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"
import {Vehiculos_categoria} from "./vehiculos_categoria.js"
import {Vehiculos_marca} from "./vehiculos_marca.js"
import {Vehiculos_tipo} from "./vehiculos_tipo.js"
import {Vehiculos_motor} from "./vehiculos_motor.js"
import {Vehiculos_trasmision} from "./vehiculos_trasmision.js"

export const Vehiculos = sequelize.define('vehiculos',{
    vehiculos_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vehiculos_nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    vehiculos_anio:{
        type:DataTypes.DATE,
        allowNull:false
    },
    vehiculos_cilindraje:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_potencia:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_velocidad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_puertas:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_cuatroporcuatro:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    vehiculos_garantia_fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    vehiculos_garantia_km:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_tecnologia_uno:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    vehiculos_tecnologia_dos:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    vehiculos_tecnologia_tres:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    vehiculos_tecnologia_cuatro:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    vehiculos_foto_uno:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_foto_dos:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_foto_tres:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_foto_cuatro:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_foto_cinco:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_video:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    vehiculos_descripcion:{
        type:DataTypes.STRING(300),
        allowNull:false
    },
    vehiculos_categoria_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_marca_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_tipo_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_motor_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vehiculos_trasmision_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})
//constrain vehiculos categoria
Vehiculos_categoria.hasMany(Vehiculos,{
    foreignKey: 'vehiculos_categoria_id',
    sourceKey: 'vehiculos_categoria_id'
    
});
Vehiculos.belongsTo(Vehiculos_categoria,{
    foreignKey: 'vehiculos_categoria_id',
    targetId: 'vehiculos_categoria_id'
})
//constrain vehiculos marca
Vehiculos_marca.hasMany(Vehiculos,{
    foreignKey:'vehiculos_marca_id',
    sourceKey:'vehiculos_marca_id'
})
Vehiculos.belongsTo(Vehiculos_marca,{
    foreignKey:'vehiculos_marca_id',
    targetId:'vehiculos_marca_id'
})
//constrain vehiculos tipo 
Vehiculos_tipo.hasMany(Vehiculos,{
    foreignKey:'vehiculos_tipo_id',
    sourceKey:'vehiculos_tipo_id'
})
Vehiculos.belongsTo(Vehiculos_tipo,{
    foreignKey:'vehiculos_tipo_id',
    targetId:'vehiculos_tipo_id'
})
//constrain vehiculos motor
Vehiculos_motor.hasMany(Vehiculos,{
    foreignKey:'vehiculos_motor_id',
    sourceKey:'vehiculos_motor_id'
})
Vehiculos.belongsTo(Vehiculos_motor,{
    foreignKey:'vehiculos_motor_id',
    targetId:'vehiculos_motor_id'
})
//constrain vehiculos trasmision
Vehiculos_trasmision.hasMany(Vehiculos,{
    foreignKey:'vehiculos_trasmision_id',
    sourceKey:'vehiculos_trasmision_id'
})
Vehiculos.belongsTo(Vehiculos_trasmision,{
    foreignKey:'vehiculos_trasmision_id',
    targetId:'vehiculos_trasmision_id'
})