const express = require("express");
const db = require("./database");

const app = express();

app.use(express.static("."));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./cadastro.html");
});

app.post("/usuarios", (req, res) => {
  const { usuario, senha } = req.body;

  const sql = `
        INSERT INTO usuarios (usuario, senha_hash)
        VALUES (?, ?)
    `;

  db.run(sql, [usuario, senha], function (err) {
    if (err) {
      console.error("ERRO SQLITE:", err);

      return res.status(500).json({
        erro: err.message,
      });
    }

    res.status(201).json({
      mensagem: "Usuário cadastrado!",
      id: this.lastID,
    });
  });
});

app.post("./login", (req, res) => {
    const { usuario, senha } = req.body;

    const sql = `
        SELECT * FROM usuarios
        WHERE usuario = ? AND senha_hash = ?
    `;

    db.get(sql, [usuario, senha], (err, usuarioEncontrado) => {
        if (err) {
            console.error("ERRO SQLITE:", err);

            return res.status(500).json({
                erro: "Erro ao realizar login"
            });
        }

        if (!usuarioEncontrado) {
            return res.status(401).json({
                erro: "Usuário ou senha incorretos"
            });
        }

        res.json({
            mensagem: "Login realizado!",
            usuario: usuarioEncontrado
        });
    });
});



app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
