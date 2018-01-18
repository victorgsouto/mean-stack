//chama o express
var express = require('express');
//chama o path
var path = require('path');
//chama o http
var http = require('http');
//chama o path
var bodyParser = require('body-parser');

//chama as rotas
var routes = require('./routes');

var app = express();

// seta o diretorio de visualizacao
app.set('views', path.join(__dirname, 'views'));

//utiliza a engine ejs
app.set('view engine', 'ejs');

// adicionando o middleware body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//compartilhar publicamente uma pasta de nosso sevidor
//Deixa que o navegador tenha aceeso aos scripts
app.use(express.static(path.join(__dirname, 'public'))); // compartilha a pasta public

//Cria a rota index
app.get('/', routes.index);

//cria o diretorio json do arquivo index.js
app.get('/lista', routes.lista)

// reposta para a URL /grava
app.post('/grava', routes.grava); 

app.delete('/filme/:id', routes.deleta);

app.post('/filme', routes.atualiza);

//cria o servidor express
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Servidor foi startado na porta ' + server.address().port);
});