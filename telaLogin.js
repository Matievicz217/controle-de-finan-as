import { fazerLogin } from "./auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    if (fazerLogin(usuario, senha)) {
        window.location.href = "contas.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
