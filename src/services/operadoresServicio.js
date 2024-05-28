const db = require ('../database/models/index.js'); 
const bcryptjs = require ('bcryptjs'); 

module.exports = {

    obtenerOperadores: () => {
        return db.operadores.findAll();
    },

    obtenerOperadorPorId: (operadorId) => {
        return db.operadores.findByPk(operadorId); 
    },

    guardarOperador: (operadorData) => {
        db.operadores.create({
            id: operadorData.id,
            nombre: operadorData.nombre,
            apellido: operadorData.apellido,
            email: operadorData.email,
            contraseña: bcryptjs.hashSync(operadorData.contraseña,10),
            avatar: 'default.png'         
        });
    },

    actualizarOperador: (operadorId, operadorData) => {
        db.operadores.update(
            {
                id: operadorData.id,
                nombre: operadorData.nombre,
                apellido: operadorData.apellido,
                email: operadorData.email
            },
            {
                where: {id: operadorId}
            }
        )

    },

    eliminarOperador: (operadorId) =>{
        db.operadores.destroy({
            where: {id: operadorId}
        });
    }
}