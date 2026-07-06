const readline = require("readline-sync");

const secreto = 42;
let tentativas = 0;

while (true) {
    let numero = Number(readline.question("Digite um número: "));
    tentativas++;

    if (numero === secreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
        break;
    } else if (numero < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}