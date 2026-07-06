const readline = require("readline-sync");

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++){
    let numero = Number(readline.question(`Digite o ${i} numero: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);