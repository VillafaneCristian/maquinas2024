const db = require ('../database/models/index.js'); 

module.exports = {

    obtenerUsuarios: function(){
        return db.usuarios.findAll();
    },

    guardarUsuario: function (usuarioData){
        db.usuarios.create(
            {
                id: usuarioData.id,
                nombre: usuarioData.nombre,
                apellido: usuarioData.apellido,
                email: usuarioData.email,
                dependencia_id: usuarioData.dependencia_id
            }
        );
    },

    eliminarUsuario: function(usuarioId){
        db.usuarios.destroy({
            where:{
                id: usuarioId
            }
        });
    }

}