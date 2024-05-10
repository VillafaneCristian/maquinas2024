const usuariosServicio = require ('../services/usuariosServicio.js'); 

module.exports = {

    listar: function(req,res){
        res.render('usuarios/usuarios-listado.ejs'); 
    },

    crear: function (req,res){
        res.render('usuarios/usuarios-formulario-alta.ejs');
    },

    guardar: function(req,res){
        usuariosServicio.guardarUsuario(req.body); 
        res.redirect('/usuarios/listar'); 
    },

    editar: function (req,res){
        res.render('usuarios/usuarios-formulario-modificacion.ejs');
    }


}