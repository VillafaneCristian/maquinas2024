const express = require ('express');
const router = express.Router();

const usuariosController = require ('../controllers/usuariosController.js'); 

router.get('/listar', usuariosController.listar);

router.get('/crear', usuariosController.crear);
router.post('/crear', usuariosController.guardar); 

router.get('/editar', usuariosController.editar);

module.exports = router;