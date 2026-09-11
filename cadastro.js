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
});