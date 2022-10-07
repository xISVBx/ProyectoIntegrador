import app from './app.js'
import {sequelize} from './database/database.js';
import "./models/ciudades.js"
import "./models/departamentos.js"
import "./models/clientes.js"
import "./models/vehiculos_categoria.js"
import "./models/vehiculos_marca.js"
import "./models/vehiculos_motor.js"
import "./models/vehiculos_tipo.js"
import "./models/vehiculos_trasmision.js"


async function main(){
    //probar la conexion
    try {
        await sequelize.sync({force:true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      //escuchar puerto
    app.listen(3000)
    console.log('listening on port 3000')
}
main()
