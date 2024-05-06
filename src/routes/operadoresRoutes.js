const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadoresController.js'); 


router.get('/listar', operadoresController.listar); 
router.get('/crear', operadoresController.crear);
router.get('/editar', operadoresController.editar); 


module.exports = router;