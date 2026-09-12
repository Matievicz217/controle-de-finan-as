function iniciarCarregamento(botao) {
    botao.disabled = true;

    botao.innerHTML = `
        <span class="spinner"></span>
        Criando conta...
    `;
}

function pararCarregamento(botao) {
    botao.disabled = false;
    botao.innerHTML = "Criar conta";
}