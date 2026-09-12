const form = document.querySelector("#form-login");
const erroLogin = document.querySelector("#erro-login");
const btnCadastro = document.querySelector("#btn-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const botao = form.querySelector("button");

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    iniciarCarregamento(botao);

    try {
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

            pararCarregamento(botao);
            return;
        }

        localStorage.setItem("usuarioLogado", "true");

        erroLogin.hidden = true;

  
        await new Promise(resolve => setTimeout(resolve, 1000));

        window.location.href = "../contas/contas.html";

    } catch (erro) {
        console.error(erro);

        erroLogin.textContent = "Erro ao conectar com o servidor.";
        erroLogin.hidden = false;

        pararCarregamento(botao);
    }
});

btnCadastro.addEventListener("click", () => {
    window.location.href = "/cadastro/cadastro.html";
});