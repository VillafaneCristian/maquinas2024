const db = require ('../database/models/index.js');

module.exports = {

    guardarDependencia(dependenciaData){
        db.dependencias.create({
            id: dependenciaData.id,
            nombre: dependenciaData.nombre,
            email: dependenciaData.email,
            piso: dependenciaData.piso,
            lado: dependenciaData.lado
        });

    }


}