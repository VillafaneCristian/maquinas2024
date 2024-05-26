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
        usuariosServicio.obtenerUsuarioPorId(req.params.id)
            .then((usuarioEncontrado)=>{
                res.render('usuarios/usuarios-formulario-modificacion.ejs',{usuarioEncontrado: usuarioEncontrado});
            });
        
    },

    actualizar: function(req,res){
        usuariosServicio.actualizarUsuario(req.params.id, req.body);
        res.redirect('/usuarios/listar'); 
    },

    eliminar: function (req,res){
        usuariosServicio.eliminarUsuario(req.params.id); 
        res.redirect('/usuarios/listar'); 
    }

}