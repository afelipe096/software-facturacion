const express = require ('express')
const router = express.Router();
const usariosController = require('../controllers/usuarioController') 

router.post('/',usariosController.crearUsuario)
router.get('/',usariosController.obtenerUsuarios)
router.get('/:id',usariosController.obtenerUsuario)
router.delete('/:id',usariosController.eliminarUsuario)

module.exports = router;
