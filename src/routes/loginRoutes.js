const express = require ('express');
const router = express.Router();
const loginControllers = require ('../controllers/loginController.js'); 

const loginValidations = require ('../validations/login-validations.js');

router.get('/', loginControllers.login);


module.exports = router;