//aqui vamos inicializar o servidor;

const express = require('express');
// o require é usado para importar uma dependencia externa;
// é constante pq não muda;

const app = express();
// express é uma função;

app.use(express.json());
//estou falando ao express pra utilizar formato json

app.post('/users', (req,  res) => {   
    //rotas sempre no plural
    // req.query = acessar query params (para filtros);
    // req.params = acessar route params (para edição, delete);
    // req.bady = acessar corpo da requisição (para criação, edição);
    
    return res.json({ id: req.body });
    //quando se trabalha cm json sempre tem que passar um objeto ou array;
    //estou enviand uma propriedade(message) com um valor(hello world);


});
//o primiero parametro é a rota, (qual rota quero executar);
//o segundo parametro é uma função;
//pode usar uma arrow função, q é uma forma reduzida;
// passando 2 parametros, (req e res);
//o req representa a requisição, pode pegar qualquer tipo de parametro que o usuario passar;
//e o res devlve uma resposta ao cliente (navegador);

app.listen(3333);
//escolho a porta que quero usar
//vou poder acessar minha aplicação pelo localhost:3333;


