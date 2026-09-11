// ui.js
// Responsável por criar/atualizar elementos visuais.
// Não decide regra de negócio, só recebe dados prontos e desenha.

/**
 * Cria uma célula <td> com valor e, opcionalmente, cor de fundo/texto.
 * @param {string} valor
 * @param {{bg: string, color: string} | undefined} corInfo
 */
export function criarCelula(valor, corInfo) {
  const celula = document.createElement("td");
  celula.textContent = valor;

  if (corInfo) {
    celula.style.backgroundColor = corInfo.bg;
    celula.style.color = corInfo.color;
  }

  return celula;
}

/**
 * Cria um botão de ação (ex: "Editar") dentro de uma célula da tabela.
 * @param {string} texto
 * @param {() => void} aoClicar
 */
export function criarBotaoAcao(texto, aoClicar) {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = texto;
  botao.classList.add("btn-acao");
  botao.addEventListener("click", aoClicar);
  return botao;
}

/**
 * Monta uma linha <tr> completa a partir de um objeto de conta.
 * @param {{nome: string, valor: string, data: string, status: string, corStatus: object}} conta
 * @param {(linha: HTMLTableRowElement, conta: object) => void} aoEditar
 */
export function criarLinhaConta(conta, aoEditar) {
  const linha = document.createElement("tr");

  linha.appendChild(criarCelula(conta.nome));
  linha.appendChild(criarCelula(conta.valor));
  linha.appendChild(criarCelula(conta.data));
  linha.appendChild(criarCelula(conta.status, conta.corStatus));

  const celulaAcoes = document.createElement("td");
  celulaAcoes.appendChild(
    criarBotaoAcao("Editar", () => aoEditar(linha, conta))
  );
  linha.appendChild(celulaAcoes);

  return linha;
}

export function alternarFormulario(form) {
  form.classList.toggle("ativo");
}

export function limparFormulario(dom) {
  dom.inputNome.value = "";
  dom.inputValor.value = "";
  dom.inputData.value = "";
  dom.selectStatus.selectedIndex = 0;
}

/**
 * Preenche o formulário com os dados de uma conta existente (modo edição).
 * @param {object} dom
 * @param {{nome: string, valor: string, data: string, status: string}} conta
 */
export function preencherFormulario(dom, conta) {
  dom.inputNome.value = conta.nome;
  dom.inputValor.value = conta.valor;
  dom.inputData.value = conta.data;
  dom.selectStatus.value = conta.status;
}

export function obterNomesExistentes() {
  return [...document.querySelectorAll("td:first-child")].map(
    (td) => td.textContent
  );
}
