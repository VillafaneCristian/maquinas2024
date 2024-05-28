const bcryptjs = require ('bcryptjs');
const operadoresServicio = require ('../services/operadoresServicio.js'); 

module.exports = function (req,res,next){
  
    operadoresServicio.obtenerOperadorPorId(req.body.id)
        .then((operadorEncontrado)=>{          
            if (!operadorEncontrado){
                req.session.errors = {
                    id:{
                        msg: 'Usuario Incorrecto'
                    }
                };
                req.session.oldData = {
                    id: req.body.id
                };
                return res.redirect('/login'); 
            }else{

                const passwordCorrecta = bcryptjs.compareSync(req.body.contraseña,operadorEncontrado.contraseña);

                if (!passwordCorrecta){
                    req.session.errors = {
                        contraseña: {
                            msg: 'La password no es correcta'
                        }
                    } 
                    req.session.oldData = {
                        id: req.body.id
                    };
                    return res.redirect('/login'); 
                }else{
                    delete operadorEncontrado.contraseña;
                    req.session.operadorLogueado = operadorEncontrado;
                    next();
                } 
            };
        });     
    

}