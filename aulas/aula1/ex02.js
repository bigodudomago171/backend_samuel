const readline = require("readline-sync");

let num1 = Number(readline.question("Digite o primeiro número: "));
let num2 = Number(readline.question("Digite o segundo número: "));

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);

if (num2 !==0){
    console.log(`Divisão: ${num1 / num2}`);
} else {
    console.log("Erro: não é possível dividir por zero.");
}