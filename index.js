const express = require('express');
const app = express();
const request = require('request')
const criaUsuario = require('./Controller/Controller')
const port = 3001;

// Simulei um usuario colocando essa variavel no global
var url = `http://localhost:3000/usuarios/1`

// Seria aqui mostrando os dados do usuario.
app.get("/",(req, res) => {
    request(url, function (error, response, body) {
        const newURL = JSON.parse(body)
        if(!newURL) return;

        res.send(`O usuario que você procura tem o id: ${newURL.id}, nome: ${newURL.nome}, e sua nota: ${newURL.nota}`); 
    })
})

// Nesse obtive mais dificuldade por ter que simular sem uma tela front, eu fiz uma função no controller onde
// objetivo era simular a entrada de dados 
app.post("/create",(req, res) => {
    const nome = 'Rebeca'
    const nota = 9.0
    criaUsuario(nome, nota)

    res.send(`Parabéns você adicionou um usúario ao sistema de nota`);
})

// Nesse put usei para tentar atualizar, mas assumo que fica mais dificil simular sem um tela front, ou um bd
app.put("/atualiza/:id", (req, res) => {
    const { id } = url.id;
    const { nome } = url.nome;
    atualiza[id] = nome;
    
    return res.send(`Atualizado com sucesso o id: ${id}`);
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`)
})
