const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadoresController.js'); 


router.get('/listar', operadoresController.listar); 

router.get('/crear', operadoresController.crear);
router.post('/crear', operadoresController.guardar); 

router.get('/editar/:id', operadoresController.editar);  
router.put('/editar/:id', operadoresController.actualizar); 

router.delete('/eliminar/:id', operadoresController.eliminar); 


module.exports = router;