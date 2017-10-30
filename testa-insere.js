var Filme = require('./models/filmes');

var filme = new Filme({
    titulo: 'Senhor dos Aneis 2020',
    diretor: 'Peter Jackson',
    ano: '2001'
});
filme.save(function(erro, filme){
    if(erro) console.log(erro);
    console.log('Gravando ' + filme.titulo + ' no Banco de Dados');
});


