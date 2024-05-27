const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController.js');
const dependenciasRoutes = require ('./dependenciasRoutes.js');
const usuariosRoutes = require ('./usuariosRoutes.js'); 
const operadoresRoutes = require ('./operadoresRoutes.js');
const areasRoutes = require ('./areasRoutes.js'); 
const loginRoutes = require ('./loginRoutes.js'); 
const operadorLogueado = require ('../middlewares/operador-logueado.js');


router.get('/',operadorLogueado, mainController.index); 
router.post('/logout', mainController.logout);

router.use('/login', loginRoutes);
router.use('/dependencias', dependenciasRoutes); 
router.use('/usuarios',operadorLogueado, usuariosRoutes); 
router.use('/operadores',operadorLogueado, operadoresRoutes); 
router.use('/areas',operadorLogueado, areasRoutes);


module.exports = router;