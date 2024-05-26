const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController.js');
const dependenciasRoutes = require ('./dependenciasRoutes.js');
const usuariosRoutes = require ('./usuariosRoutes.js'); 
const operadoresRoutes = require ('./operadoresRoutes.js');
const areasRoutes = require ('./areasRoutes.js'); 
const loginRoutes = require ('./loginRoutes.js'); 


router.get('/', mainController.index); 
router.use('/login', loginRoutes);
router.use('/dependencias', dependenciasRoutes); 
router.use('/usuarios', usuariosRoutes); 
router.use('/operadores', operadoresRoutes); 
router.use('/areas', areasRoutes);


module.exports = router;