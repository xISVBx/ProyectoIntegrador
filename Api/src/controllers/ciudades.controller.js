import { Ciudades } from "../models/ciudades.js"

export const getCiudades = async(req,res)=>{
    try{
        const ciudades = await Ciudades.findAll()
        res.json(ciudades)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const getCiudad = async(req,res)=>{
    try{
        const {id_ciudad}= req.params
        const ciudad = await Ciudades.findByPk(id_ciudad)
        res.json(ciudad)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const createCiudad = async(req,res)=>{
    try{
        const {ciudad} = req.body
        const newProject = await Ciudades.create({
            ciudad
        })
        res.json(newProject)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const updateCiudad = async(req,res)=>{
    try{
        const {id_ciudad} = req.params
        const {ciudad} = req.body
        const ciudadpk = await Ciudades.findByPk(id_ciudad)
        await ciudadpk.update({ciudad}) //
        
        res.json(ciudadpk)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
export const deleteCiudad = async(req,res)=>{
    try{
        const {id_ciudad} = req.params
        await Ciudades.destroy({
            where: {
                id_ciudad
            }
        });
        res.status(200).json({message: 'successively update'}); 
    }catch(err){
        res.status(400).json({message: err.message});
    }
}