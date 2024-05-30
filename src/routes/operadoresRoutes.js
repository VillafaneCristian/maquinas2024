const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadoresController.js'); 

const operadoresValidations = require ('../validations/operadores-validations.js');
const operadoresMiddleware = require ('../middlewares/operadores-middleware.js');
const operadorEnBaseDeDatos = require ('../middlewares/operador-en-BasedeDatos-Middleware.js');


router.get('/listar', operadoresController.listar); 

router.get('/crear', operadoresController.crear);
router.post('/crear', operadoresValidations, operadoresMiddleware, operadorEnBaseDeDatos, operadoresController.guardar); 

router.get('/editar/:id', operadoresController.editar);  
router.put('/editar/:id', operadoresController.actualizar); 

router.delete('/eliminar/:id', operadoresController.eliminar); 


module.exports = router;