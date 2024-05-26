const express = require ('express'); 
const router = express.Router();
const areasController = require ('../controllers/areasController.js'); 



router.get('/listar', areasController.listar); 

router.get('/crear', areasController.crear); 
router.post('/crear', areasController.guardar); 

router.get('/editar', areasController.editar); 


module.exports = router; 