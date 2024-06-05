const express = require ('express');
const router = express.Router();
const dependenciasController = require ('../controllers/dependenciasController.js'); 

const operadorLogueado = require ('../middlewares/operador-logueado.js');


router.get('/listar', operadorLogueado, dependenciasController.listar); 


router.get('/crear',operadorLogueado, dependenciasController.crear); 
router.post('/crear', dependenciasController.guardar);


router.get('/editar/:id', operadorLogueado, dependenciasController.editar); 
router.put('/editar/:id', dependenciasController.actualizar); 

router.delete('/eliminar/:id', dependenciasController.eliminar); 


module.exports = router;
