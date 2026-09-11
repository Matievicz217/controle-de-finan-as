const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;
    const repeatSenha = document.querySelector("#confirmar-senha").value;

    if (senha !== repeatSenha) {
        console.log("As senhas não são iguais.");
        return;
    }

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
        console.log("Erro ao cadastrar:", dados.erro);
        return;
    }

    // Cadastro realizado com sucesso
    window.location.href = "./login.html";
});