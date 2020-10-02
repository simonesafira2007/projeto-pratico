// passa a passo
// 1. importar o json de músicas
// 2. criar o método para buscar todas as músicas
// 3. exportar o método

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima

const musicas = require('../model/musicas.json');
const albuns = require('../model/albuns.json');
   
const getAll = (req, res) => {  

    console.log (req.url);
    // verifica se a resposta teve resultado 200 e envia o JSON
    res.status(200).send(musicas);
}

    // passo-a-passo
    // 1. Criar método getById
    // 2. Retornar o item daquele Id
   
const getById = (req, res) => {
    const id = req.params.id
    const musicaFiltrada = musicas.find((musica) => musica.id == id)
   
    res.status(200).send(musicaFiltrada);
}
    // passo-a-passo
    // 1. Criar método getByArtists
    // 2. Filtrar lista de músicas por artistas 

   
    const getByArtist = (req, res) => {
        const artista = req.params.artista
        const artistaFiltrado = musicas.filter((musica) => musica.artista == artista)
        res.status(200).send(artistaFiltrado);
    }
    // passo-a-passo
    // 1. Criar método getAllArtists
    // 2. Retornar somente o nome dos artistas da lista de músicas
    // 3. Pega somente os artistas da lista de músicas

    const getAllArtists = (req, res) => {
        const artistas = musicas.map((musica) => musica.artista)
        res.status(200).send(artistas)
    }

    // 1. Criar método getAllAlbum
    // 2. Retornar somente o nome dos álbuns da lista de músicas
    // 3. Pega somente os albuns com a lista de músicas 
  
    const getAllAlbuns = (req, res) => {
        const albunsFiltrado = albuns.map((album) => album.musicas);
        res.status(200).send(albunsFiltrado)
    }

    const getByTitulo = (req, res) =>{
        const titulo = req.params.titulo;
        const albumFiltrado = albuns.find((album) => album.titulo == titulo);
        res.status(200).send(albumFiltrado)

    }
 module.exports = {getAll, getById, getByArtist, getAllArtists, getAllAlbuns, getByTitulo}

 