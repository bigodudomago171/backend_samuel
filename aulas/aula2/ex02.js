const prompt = require("prompt-sync")();

function validarSenha(senha) {
    return senha.length >= 8;
}

let senha = prompt("Digite uma senha: ");

if (validarSenha(senha)) {
    console.log("Senha válida");
} else {
    console.log("Senha fraca - mínimo 8 caracteres.");
}