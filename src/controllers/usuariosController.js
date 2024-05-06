module.exports = {

    listar: function(req,res){
        res.render('usuarios/usuarios-listado.ejs'); 
    },

    crear: function (req,res){
        res.render('usuarios/usuarios-formulario-alta.ejs');
    },

    editar: function (req,res){
        res.render('usuarios/usuarios-formulario-modificacion.ejs');
    }


}