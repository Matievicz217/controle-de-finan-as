// contas.js
// Regras de negócio da tela de contas: nada de DOM aqui dentro,
// só dados e validações puras — fica fácil de testar isoladamente.

export const CORES_STATUS = {
  Paga: { bg: "green", color: "white" },
  Pendente: { bg: "orange", color: "white" },
  Atrasada: { bg: "red", color: "white" },
};

/**
 * Verifica se um nome de conta já existe em uma lista de nomes.
 * @param {string} nome
 * @param {string[]} nomesExistentes
 * @returns {boolean}
 */
export function contaJaExiste(nome, nomesExistentes) {
  return nomesExistentes.some((nomeExistente) => nomeExistente === nome);
}

/**
 * Monta o objeto de dados de uma conta a partir dos valores brutos do formulário.
 * @param {{nome: string, valor: string, data: string, status: string}} dados
 */
export function criarConta({ nome, valor, data, status }) {
  return {
    nome: nome.trim(),
    valor,
    data,
    status,
    corStatus: CORES_STATUS[status],
  };
}
