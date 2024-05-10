const { where } = require('sequelize');
const db = require ('../database/models/index.js');

module.exports = {

    obtenerDependencias: ()=>{
        return db.dependencias.findAll(); 
    },

    obtenerDependenciaPorId: (dependenciaId) => {
        return db.dependencias.findByPk(dependenciaId); 
    },

    guardarDependencia: (dependenciaData) =>{
        db.dependencias.create({
            id: dependenciaData.id,
            nombre: dependenciaData.nombre,
            email: dependenciaData.email,
            piso: dependenciaData.piso,
            lado: dependenciaData.lado,
            observaciones: dependenciaData.observaciones 
        });
    },

    actualizarDependencia: (dependenciaId, dependenciaData) => {
        db.dependencias.update(
            {
                id: dependenciaData.id,
                nombre: dependenciaData.nombre,
                email: dependenciaData.email,
                piso: dependenciaData.piso,
                lado: dependenciaData.lado,
                observaciones: dependenciaData.observaciones
            },
            {
                where:{id: dependenciaId}
            }
        )
    },

    eliminarDependencia: (dependenciaId) => {
        db.dependencias.destroy({
            where:{
                id: dependenciaId
            }
        });
    } 


}