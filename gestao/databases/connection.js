const knex = require('knex')({
    client: 'mysql2', 
    connection:{
        host:'localhost', //nome do host por padrão comumente localhost
        user: 'root', // nome do user por padrão root
        password:'root', //senha do banco, as vezes ""
        database:'gestao_livros' //nome da base de dados que será utilizada.
    }
});
module.exports = knex
