const form = document.querySelector("#form-login");
const erroLogin = document.querySelector("#erro-login");
const btnCadastro = document.querySelector("#btn-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    const resposta = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario,
            senha
        })
    });

    const dados = await resposta.json();

    console.log(dados);

    if (!resposta.ok) {
        erroLogin.textContent = dados.erro;
        erroLogin.hidden = false;
        return;
    }

    // Marca o usuário como logado
    localStorage.setItem("usuarioLogado", "true");

    erroLogin.hidden = true;

    console.log("Login realizado com sucesso!");

    window.location.href = "./contas.html";
});

btnCadastro.addEventListener("click", () => {
    window.location.href = "./cadastro.html";
});