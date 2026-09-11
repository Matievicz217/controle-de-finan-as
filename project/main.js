// main.js

// Ponto de entrada da tela de contas.
// Só orquestra: liga eventos, chama regras de negócio e manda a UI desenhar.

import DOM from "./dom.js";
import { estaLogado } from "./auth.js";
import { contaJaExiste, criarConta } from "./contas/contas.js";

import {
    criarLinhaConta,
    alternarFormulario,
    limparFormulario,
    preencherFormulario,
    obterNomesExistentes,
} from "./ui.js";

// Verifica se o usuário está logado
if (!estaLogado()) {
    window.location.href = "login.html";
}

// Guarda a linha da tabela em edição
// null = modo "adicionar nova conta"
let linhaEmEdicao = null;

function iniciarEdicao(linha, conta) {
    linhaEmEdicao = linha;

    preencherFormulario(DOM, conta);

    DOM.form.classList.add("ativo");
    DOM.btnForm.textContent = "Salvar edição";
    DOM.inputNome.focus();
}

function encerrarEdicao() {
    linhaEmEdicao = null;
    DOM.btnForm.textContent = "Adicionar";
}

function nomeDaLinha(linha) {
    return linha.children[0].textContent;
}

function salvarConta(event) {
    event.preventDefault();

    const nome = DOM.inputNome.value.trim();

    if (!nome) return;

    // Ao editar, o próprio nome atual da linha
    // não deve contar como duplicata
    const nomesExistentes = obterNomesExistentes().filter(
        (nomeExistente) =>
            !linhaEmEdicao ||
            nomeExistente !== nomeDaLinha(linhaEmEdicao)
    );

    if (contaJaExiste(nome, nomesExistentes)) {
        alert("Essa conta já existe");
        return;
    }

    const conta = criarConta({
        nome,
        valor: DOM.inputValor.value,
        data: DOM.inputData.value,
        status: DOM.selectStatus.value,
    });

    const novaLinha = criarLinhaConta(conta, iniciarEdicao);

    if (linhaEmEdicao) {
        linhaEmEdicao.replaceWith(novaLinha);
        encerrarEdicao();
    } else {
        DOM.tabela.appendChild(novaLinha);
    }

    limparFormulario(DOM);
}

function init() {
    DOM.btnToggle.addEventListener("click", () => {
        alternarFormulario(DOM.form);
    });

    DOM.btnForm.addEventListener("click", salvarConta);
}

init();