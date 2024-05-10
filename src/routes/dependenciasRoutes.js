const express = require ('express');
const router = express.Router();
const dependenciasController = require ('../controllers/dependenciasController.js'); 


router.get('/listar', dependenciasController.listar); 


router.get('/crear', dependenciasController.crear); 
router.post('/crear', dependenciasController.guardar);


router.get('/editar/:id', dependenciasController.editar); 
router.put('/editar/:id', dependenciasController.actualizar); 

router.delete('/eliminar/:id', dependenciasController.eliminar); 


module.exports = router;
