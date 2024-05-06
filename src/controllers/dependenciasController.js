const dependenciasServicio = require ('../services/dependenciasServicio.js');

module.exports = {

    listar: function(req,res){
        res.render('dependencias/dependencias-listado.ejs'); 
    },

    crear: function (req,res){
        res.render('dependencias/dependencias-formulario-alta.ejs'); 
    },

    guardar: function(req,res){
        dependenciasServicio.guardarDependencia(req.body);
        res.redirect('/dependencias/listar'); 
    },

    editar: function (req,res){
        res.render('dependencias/dependencias-formulario-modificacion.ejs'); 
    }

}