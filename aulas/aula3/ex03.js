const produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Headset", preco: 200 },
    { id: 5, nome: "Webcam", preco: 180 }
];

const produto = produtos.find(p => p.id === 3);

console.log("Produto encontrado:");
console.log(produto.nome);

const caros = produtos.filter(p => p.preco > 50);

console.log("\nProdutos acima de R$50,00:");
console.log(caros);