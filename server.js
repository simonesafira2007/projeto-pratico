// passo a passo
// 1. Importar app
// 2. Declarar a variável 'port' e atribuir valor
// 3. Escutar o app mostrando no console qual caminho

const app = require ('./src/app');
const port = 8000

app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
     
})

