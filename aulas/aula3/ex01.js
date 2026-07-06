const aluno = {
    nome: "Samuel",
    idade: 16,
    cidade: "Paraná",
    curso: "Desenvolvimento de Sistemas"
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

aluno.cidade = "Cascavel";

console.log("\nApós alterar a cidade:");
console.log(`Cidade: ${aluno.cidade}`);