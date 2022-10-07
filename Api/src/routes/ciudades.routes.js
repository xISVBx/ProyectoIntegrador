import { Router } from "express";
import {getCiudades,createCiudad,updateCiudad,
    deleteCiudad,getCiudad} from "../controllers/ciudades.controller.js"

const router = Router()

router.get('/ciudades',getCiudades)
router.post('/ciudades',createCiudad)
router.put('/ciudades/:id_ciudad',updateCiudad)
router.delete('/ciudades/:id_ciudad',deleteCiudad)
router.get('/ciudades/:id_ciudad',getCiudad)

export default router