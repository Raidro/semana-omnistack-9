//aqui vamos inicializar o servidor;

const express = require('express');
// o require é usado para importar uma dependencia externa;
// é constante pq não muda;

const app = express();
// express é uma função;

app.get('/', (req, res) => {

    return res.json({ message: 'Hello World' });
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


