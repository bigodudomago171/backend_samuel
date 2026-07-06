const readline = require("readline-sync");

let name = readline.question("Digite seu nome: ");
let idade = Number(readline.question("Digite sua idade: "));
let cidade = readline.question("Digite sua cidade: ");

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`);