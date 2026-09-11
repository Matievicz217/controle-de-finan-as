const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (err) => {
    if (err) {
        console.error("Erro ao conectar com o banco:", err.message);
    } else {
        console.log("Banco de dados conectado");
    }
});

module.exports = db;