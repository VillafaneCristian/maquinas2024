const db = require ('../database/models/index.js'); 

module.exports = {

    obtenerUsuarios: function(){
        return db.usuarios.findAll();
    },

    obtenerUsuarioPorId: function(usuarioId){
        return db.usuarios.findByPk(usuarioId); 
    },

    guardarUsuario: function (usuarioData){
        db.usuarios.create(
            {
                id: usuarioData.id,
                nombre: usuarioData.nombre,
                apellido: usuarioData.apellido,
                email: usuarioData.email,
                dependencias_id: usuarioData.dependencias_id
            }
        );
    },

    actualizarUsuario: function(usuarioId, usuarioData){
        db.usuarios.update(
            {
                id: usuarioData.id,
                nombre:usuarioData.nombre,
                apellido: usuarioData.apellido,
                email: usuarioData.email,
                dependencias_id: usuarioData.dependencias_id 
            },
            {
                where:{id:usuarioId}
            }
        )
    },
        

    eliminarUsuario: function(usuarioId){
        db.usuarios.destroy({
            where:{
                id: usuarioId
            }
        });
    }

}