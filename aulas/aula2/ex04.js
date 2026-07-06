function executarOperacao(a, b, operacao) {
    console.log(operacao(a, b));
}

executarOperacao(10, 3, (a, b) => a + b); // 13
executarOperacao(10, 3, (a, b) => a * b); // 30
executarOperacao(10, 3, (a, b) => a - b); // 7