import { Router } from "express";
import {getDepartamentos,getDepartamento,createDepartamentos,
    updateDepartamentos,deleteDepartamentos} from "../controllers/departamentos.controller.js"

const router = Router()

router.get('/departamentos',getDepartamentos)
router.post('/departamentos',createDepartamentos)
router.put('/departamentos/:id_departamento',updateDepartamentos)
router.delete('/departamentos/:id_departamento',deleteDepartamentos)
router.get('/departamentos/:id_departamento',getDepartamento)

export default router