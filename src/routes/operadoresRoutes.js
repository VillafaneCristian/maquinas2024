const express = require ('express');
const router = express.Router();
const multer = require ('multer');
const path = require ('path'); 

const operadoresController = require ('../controllers/operadoresController.js'); 

const operadoresValidations = require ('../validations/operadores-validations.js');
const operadoresMiddleware = require ('../middlewares/operadores-middleware.js');
const operadorEnBaseDeDatos = require ('../middlewares/operador-en-BasedeDatos-Middleware.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb (null, path.join(__dirname,'../../public/images/operadores/avatars'));
    },
    filename: function (req, file, cb){
        cb(null, 'operador-'+ req.session.operadorLogueado.id + path.extname(file.originalname));
    }
});

const upload = multer ({storage:storage}); 

router.get('/listar', operadoresController.listar); 

router.get('/crear', operadoresController.crear);
router.post('/crear', operadoresValidations, operadoresMiddleware, operadorEnBaseDeDatos, operadoresController.guardar); 

router.get('/editar/:id', operadoresController.editar);  
router.put('/editar/:id', operadoresController.actualizar); 

router.delete('/eliminar/:id', operadoresController.eliminar); 

router.get('/perfil/:id', operadoresController.perfil);
router.put('/perfil/:id', upload.single('avatar'), operadoresController.editarPerfil);  


module.exports = router;