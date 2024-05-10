const usuariosServicio = require ('../services/usuariosServicio.js'); 

module.exports = {

    listar: function(req,res){
        usuariosServicio.obtenerUsuarios()
            .then((listadoUsuarios) => {
                res.render('usuarios/usuarios-listado.ejs', {listadoUsuarios: listadoUsuarios});
            });
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
    },

    eliminar: function (req,res){
        usuariosServicio.eliminarUsuario(req.params.id); 
        res.redirect('/usuarios/listar'); 
    }

}