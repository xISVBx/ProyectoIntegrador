import { Departamentos } from "../models/departamentos.js"

export const getDepartamentos = async(req,res)=>{
    try{
        const departamentos = await Departamentos.findAll()
        res.json(departamentos)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const getDepartamento = async(req,res)=>{
    try{
        const {id_departamento}= req.params
        const departamento = await Departamentos.findByPk(id_departamento)
        res.json(departamento)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const createDepartamentos= async(req,res)=>{
    try{
        const newDepartamento = await Departamentos.create(req.body)
        res.json(newDepartamento)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const updateDepartamentos = async(req,res)=>{
    try{
        const {id_departamento} = req.params
        const {id_ciudad,departamento} = req.body
        const departamentopk = await Departamentos.findByPk(id_departamento)
        await departamentopk.update({id_ciudad,departamento}) //
        
        res.json(departamentopk)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const deleteDepartamentos = async(req,res)=>{
    try{
        const {id_departamento} = req.params
        await Departamentos.destroy({
            where: {
                id_departamento
            }
        });
        res.status(200).json({message: 'successively delete'}); 
    }catch(err){
        res.status(400).json({message: err.message});
    }
}