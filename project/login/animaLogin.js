function iniciarCarregamento(botao) {
    botao.disabled = true;

    botao.innerHTML = `
        <span class="spinner"></span>
        Entrando...
    `;
}

function pararCarregamento(botao) {
    botao.disabled = false;
    botao.innerHTML = "Entrar";
}