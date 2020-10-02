// passo-a-passo
// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router
     
const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');
 
route.get('/', controller.getAll);
route.get('/musica/:id', controller.getById);
route.get('/musica/artista/:artista', controller.getByArtist);
route.get('/artistas', controller.getAllArtists);
route.get('/albuns', controller.getAllAlbuns);
route.get('/album/:titulo', controller.getByTitulo);
   
module.exports = route