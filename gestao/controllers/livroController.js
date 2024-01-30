const { response } = require('express')
const db = require('../databases/connection')

livroController = {

    formCadastro: (req, res) => {
        res.render('cadastrolivro');
    },

    novoLivro: (req, res) => {
        const { titulo, autor, ano_publicacao } = req.body;
        db.insert({ titulo, autor, ano_publicacao }).table("livros").then(data => {
            console.log(data);
            res.json({ message: 'Livro salvo com sucesso!' });
        }).catch(error => {
            console.log(error);
            res.json({ error: 'Erro ao salvar o livro.' });
        });
    },

    listarLivros: (req, res) => {
        db.select("*").table("livros").then(
            livros => {
                console.log(livros);
                // res.json(livros);
                res.render('listarlivros', { livros });
            }).catch(error => {
                console.log(error);
                res.json({ error: 'Erro ao listar os livros.' });
            });
    },

    buscarLivro: (req, res) => {
        const id = req.params.id;
        console.log(id);
        db.select("*").table("livros").where({ id }).then(livro => {
            console.log(livro);
            res.json(livro);
        }).catch(error => {
            console.log(error);
            res.json({ error: 'Erro ao buscar o livro.' });
        });
    },

    deletarLivro: (req, res) => {
        const id = req.params.id;
        db.where({ id }).del().table("livros").then(data => {
            res.json({ message: "Livro removido" });
        }).catch(error => {
            res.json({ error: 'Erro ao deletar o livro.' });
        });
    },

    editarLivro: (req, res) => {
        const id = req.params.id;
        const { titulo, autor, ano_publicacao } = req.body;
        db.where({ id }).update({ titulo, autor, ano_publicacao }).table("livros").then(data => {
            res.json({ message: "Dados do livro atualizados com sucesso!" });
        }).catch(error => {
            res.json({ error: 'Erro ao atualizar os dados do livro.' });
        });
    },

    formEditarLivro: (req, res) => {
        const id = req.params.id;
        console.log(id);
        db.select("*").table("livros").where({ id }).then(livro => {
            console.log(livro);
            res.render('editarLivro', { livro });
        }).catch(error => {
            console.log(error);
            res.json({ error: 'Erro ao carregar dados do livro para edição.' });
        });
    }

};

module.exports = livroController;
