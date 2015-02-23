var Filmes = require('../models/filmes.js');

exports.index = function(req, res) {
    res.render('index');
};

exports.lista = function(req, res) {
    Filmes.find({}, function(err, filmes) {
        res.json({filmes: filmes});
    });
};

exports.grava = function(req, res) {
    var filme = new Filmes(req.body);
    filme.save(function(err, filme){
    	
    	res.send(filme);
    });
};

exports.deleta = function(req, res) {
    var id = req.params.id;

    Filmes.findByIdAndRemove(id, function(err, filme){
    	res.send('Filme ' + filme.titulo + ' removido com sucesso!');
    });
};

exports.atualiza = function(req, res) {
    var id = req.body._id; 
    delete req.body._id;

    Filmes.findByIdAndUpdate(id, req.body, function(err, filme){
        res.send('Filme ' + filme.titulo + ' atualizado com sucesso!');
    });
};