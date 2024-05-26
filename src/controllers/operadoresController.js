const operadoresServicio = require ('../services/operadoresServicio.js');

module.exports = {

    listar: function(req,res){
        operadoresServicio.obtenerOperadores()
            .then((listadoOperadores)=>{
                res.render('operadores/operadores-listado.ejs',{listadoOperadores: listadoOperadores});
            });
    },

    crear: function(req,res){
        res.render('operadores/operadores-formulario-alta.ejs');
    },

    guardar: function(req,res){
        operadoresServicio.guardarOperador(req.body);
        res.redirect('/operadores/listar');  
    },

    editar: function (req,res){
        operadoresServicio.obtenerOperadorPorId(req.params.id)
            .then((operadorEncontrado)  => {
                res.render('operadores/operadores-formulario-modificacion.ejs', {operadorEncontrado: operadorEncontrado});
            });
        
    },

    actualizar: function(req,res){
        operadoresServicio.actualizarOperador(req.params.id, req.body);
        res.redirect('/operadores/listar'); 
    },

    eliminar: function (req,res){
        operadoresServicio.eliminarOperador(req.params.id); 
        res.redirect('/operadores/listar');
    }

}; 