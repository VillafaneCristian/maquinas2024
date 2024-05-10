const db = require ('../database/models/index.js'); 

module.exports = {

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
    }

}