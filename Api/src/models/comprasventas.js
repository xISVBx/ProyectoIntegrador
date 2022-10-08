import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clientes } from "./clientes.js"
import { Empleados } from "./empleados.js";
import { Vehiculos} from "./vehiculos.js"

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
//constrain clientes
Clientes.hasMany(Comprasventas,{
    foreignKey: 'id_cliente',
    sourceKey:'id_cliente'
})
Comprasventas.belongsTo(Clientes,{
    foreignKey:'id_cliente',
    targetId:'id_cliente'
})
//constrain empleados
Empleados.hasMany(Comprasventas,{
    foreignKey: 'id_empleado',
    sourceKey:'id_empleado'
})
Comprasventas.belongsTo(Empleados,{
    foreignKey:'id_empleado',
    targetId:'id_empleado'
})
//constrain vehiculos
Vehiculos.hasMany(Comprasventas,{
    foreignKey: 'vehiculos_id',
    sourceKey:'vehiculos_id'
})
Comprasventas.belongsTo(Vehiculos,{
    foreignKey:'vehiculos_id',
    targetId:'vehiculos_id'
})
