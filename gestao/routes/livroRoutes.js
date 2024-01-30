const express = require('express');
const override = require('method-override');
const livroController = require('../controllers/livroController');

const router = express.Router();
router.use(override('_method'));

router.post('/novoLivro', livroController.novoLivro);
router.get('/listarLivros', livroController.listarLivros);
router.get('/buscarLivro/:id', livroController.buscarLivro);
router.delete('/deletarLivro/:id', livroController.deletarLivro);
router.put('/editarLivro/:id', livroController.editarLivro);
router.get('/editarLivro/:id', livroController.formEditarLivro);
router.get('/cadastroLivro', livroController.formCadastro);

module.exports = router;
