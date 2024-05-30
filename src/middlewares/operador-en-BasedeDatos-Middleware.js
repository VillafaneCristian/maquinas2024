const db = require ('../database/models/index.js');
const operadoresServicio = require('../services/operadoresServicio.js');

module.exports = function (req,res,next){

    operadoresServicio.obtenerOperadores()
        .then((operadores)=>{
            console.log(operadores);
        });
        next(); 


}