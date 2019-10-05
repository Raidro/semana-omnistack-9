//aqui vamos inicializar o servidor;

const express = require('express');
// o require é usado para importar uma dependencia externa;
// é constante pq não muda;

const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes')
//necessario colocar o caminho relativo;
//sem o "./" ele vai atrás de alguma dependencia

const app = express();
// express é uma função;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-hzhoe.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());

app.use(express.json());
//estou falando ao express pra utilizar formato json

app.use(routes);
//precisa vir depois do express json;

app.listen(3333);
//escolho a porta que quero usar
//vou poder acessar minha aplicação pelo localhost:3333;


