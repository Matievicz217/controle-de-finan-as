const form = document.querySelector("#form-cadastro");
const erroCadastro = document.querySelector("#erro-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const botao = form.querySelector("button");

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;
    const repeatSenha = document.querySelector("#confirmar-senha").value;

    if (senha !== repeatSenha) {
        erroCadastro.textContent = "As senhas não são iguais.";
        erroCadastro.hidden = false;
        return;
    }

    // Inicia o carregamento
    iniciarCarregamento(botao);

    try {
        const resposta = await fetch("/usuarios", {
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
            erroCadastro.textContent = dados.erro;
            erroCadastro.hidden = false;

            pararCarregamento(botao);
            return;
        }

        erroCadastro.hidden = true;

        // Mantém a animação por 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        window.location.href = "/login/login.html";

    } catch (erro) {
        console.error(erro);

        erroCadastro.textContent = "Erro ao conectar com o servidor.";
        erroCadastro.hidden = false;

        pararCarregamento(botao);
    }
});