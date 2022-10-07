import express from "express";
import projectsRoutes from './routes/router/router.routes.js'
import bp from 'body-parser';
import morgan from 'morgan'

const app = express();

//middleware
app.use(express.json())
//bucar que mierda es esta monda
app.use(bp.urlencoded({extended: true}))
app.use(morgan('dev'))

//rutas
app.use(projectsRoutes.ciudades)
app.use(projectsRoutes.departamentos)


export default app