module.exports = {

    listar: function(req,res){
        res.render('areas/areas-listado.ejs');
    },

    crear: function(req,res){
        res.render('areas/areas-formulario-alta.ejs'); 
    },

    editar: function(req,res){
        res.render('areas/areas-formulario-modificacion.ejs')
    }

}