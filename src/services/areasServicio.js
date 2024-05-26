const db = require ('../database/models/index.js');

module.exports = {

    guardarArea: function(areaData){
        db.areas.create({
            id: areaData.id,
            nombre: areaData.nombre,
            encargado: areaData.encargado,
            email: areaData.email,
            domicilio: areaData.domicilio,
            telefono: areaData.telefono
        });
    }

};