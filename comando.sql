-- database: ./db.sqlite

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    senha_hash TEXT NOT NULL
);

CREATE TABLE contas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL,
    vencimento TEXT NOT NULL,
    status TEXT NOT NULL,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);