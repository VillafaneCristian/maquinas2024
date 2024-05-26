const areasServicio = require ('../services/areasServicio.js'); 

module.exports = {

    listar: function(req,res){
        res.render('areas/areas-listado.ejs');
    },

    crear: function(req,res){
        res.render('areas/areas-formulario-alta.ejs'); 
    },

    guardar: function(req,res){
        areasServicio.guardarArea(req.body); 
        res.redirect('/areas/listar'); 
    },

    editar: function(req,res){
        res.render('areas/areas-formulario-modificacion.ejs')
    }

}