// dom.js
// Centraliza todas as referências aos elementos do DOM usados na tela de contas.
// Nenhuma lógica de negócio ou manipulação visual deve viver aqui.

const DOM = {
  btnToggle: document.querySelector(".btnAdd button"),
  form: document.querySelector("form"),
  tabela: document.querySelector("table"),
  btnForm: document.querySelector(".botaoForm"),

  inputNome: document.querySelector('input[type="text"]'),
  inputValor: document.querySelector('input[type="number"]'),
  inputData: document.querySelector('input[type="date"]'),
  selectStatus: document.querySelector("select"),
};

export default DOM;
