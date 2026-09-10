const express = require("express");
const db = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensagem: "API do Controle Financeiro funcionando!" });
});

app.post("/usuarios", (req, res) => {
    const { nome, email, senha } = req.body;

    const sql = `
        INSERT INTO usuarios (nome, email, senha_hash)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [nome, email, senha], function (err) {
        if (err) {
            return res.status(500).json({
                erro: "Erro ao cadastrar usuário"
            });
        }

        res.status(201).json({
            mensagem: "Usuário cadastrado!",
            id: this.lastID
        });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});