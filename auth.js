const USUARIO = "admin";
const SENHA = "123456@";

export function fazerLogin(usuario, senha) {
    if (usuario === USUARIO && senha === SENHA) {
        localStorage.setItem("usuarioLogado", "true");
        return true;
    }

    return false;
}

export function estaLogado() {
    return localStorage.getItem("usuarioLogado") === "true";
}

export function logout() {
    localStorage.removeItem("usuarioLogado");
}