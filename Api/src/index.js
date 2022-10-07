import app from './app.js'
import {sequelize} from './database/database.js';
import "./models/ciudades.js"
import "./models/departamentos.js"


async function main(){
    //probar la conexion
    try {
        await sequelize.sync({force:false});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      //escuchar puerto
    app.listen(3000)
    console.log('listening on port 3000')
}
main()
