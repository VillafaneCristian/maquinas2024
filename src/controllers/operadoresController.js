module.exports = {

    listar: function(req,res){
        res.render('operadores/operadores-listado.ejs');
    },

    crear: function(req,res){
        res.render('operadores/operadores-formulario-alta.ejs');
    },

    editar: function (req,res){
        res.render('operadores/operadores-formulario-modificacion.ejs');
    } 

}; 