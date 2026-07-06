const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Carlos", nota: 5 },
    { id: 3, nome: "Maria", nota: 9 },
    { id: 4, nome: "João", nota: 6 },
    { id: 5, nome: "Pedro", nota: 7 }
];

const resultado = alunos.map(aluno => ({
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));

console.log(resultado);