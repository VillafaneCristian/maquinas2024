const express = require ('express');
const router = express.Router();
const loginController = require ('../controllers/loginController.js'); 

const loginValidations = require ('../validations/login-validations.js');
const loginMiddleware = require ('../middlewares/login-middleware.js'); 
const validarOperador = require ('../middlewares/validar-operador.js');

router.get('/', loginController.login);
router.post('/', loginValidations, loginMiddleware,validarOperador,loginController.procesarLogin); 

loginController
module.exports = router;