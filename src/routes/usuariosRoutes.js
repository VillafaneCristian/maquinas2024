const express = require ('express');
const router = express.Router();

const usuariosController = require ('../controllers/usuariosController.js'); 

router.get('/listar', usuariosController.listar);

router.get('/crear', usuariosController.crear);
router.post('/crear', usuariosController.guardar); 

router.get('/editar/:id', usuariosController.editar);
router.put('/editar/:id', usuariosController.actualizar);

router.delete('/eliminar/:id', usuariosController.eliminar);

module.exports = router;