const prompt = require("readline-sync");

const produtos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`Produto ${i}`);

    const nome = prompt.question("Nome: ");
    const preco = Number(prompt.question("Preço: "));

    produtos.push({
        nome: nome,
        preco: preco
    });

    console.log();
}

const acima20 = produtos.filter(produto => produto.preco > 20);

console.log("Produtos acima de R$20,00:");
console.log(acima20);