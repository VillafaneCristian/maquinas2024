const dependenciasServicio = require ('../services/dependenciasServicio.js');


module.exports = {

    listar: function(req,res){
        dependenciasServicio.obtenerDependencias()
            .then((listadoDependencias)=>{
                res.render('dependencias/dependencias-listado.ejs',{listadoDependencias:listadoDependencias})
            }); 
    },

    crear: function (req,res){
        res.render('dependencias/dependencias-formulario-alta.ejs'); 
    },

    guardar: function(req,res){
        dependenciasServicio.guardarDependencia(req.body);
        res.redirect('/dependencias/listar'); 
    },

    editar: function (req,res){
        dependenciasServicio.obtenerDependenciaPorId(req.params.id)
            .then((dependenciaEncontrada) => {
                res.render('dependencias/dependencias-formulario-modificacion.ejs', {dependenciaEncontrada: dependenciaEncontrada});
            })
    }, 

    actualizar: function (req,res){
        dependenciasServicio.actualizarDependencia(req.params.id, req.body);
        res.redirect('/dependencias/listar'); 
    },

    eliminar: function(req,res){
            dependenciasServicio.eliminarDependencia(req.params.id); 
            res.redirect('/dependencias/listar'); 
    }

}