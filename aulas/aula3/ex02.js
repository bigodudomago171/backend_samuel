const produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Headset", preco: 200 }
];

for (let produto of produtos) {
    console.log(produto);
}

produtos.push({
    id: 5,
    nome: "Webcam",
    preco: 180
});

console.log("\nNovo tamanho do array:", produtos.length);