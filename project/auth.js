export function estaLogado() {
    return localStorage.getItem("usuarioLogado") === "true";
}

export function logout() {
    localStorage.removeItem("usuarioLogado");
}