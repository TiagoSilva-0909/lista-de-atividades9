
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

// Funções de operações matemáticas
function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    if (y === 0) {
        return 'Erro: divisão por zero!';
    }
    return x / y;
}

// Testes
console.log(executarOperacao(10, 5, soma));          // 15
console.log(executarOperacao(10, 5, subtracao));     // 5
console.log(executarOperacao(10, 5, multiplicacao)); // 50
console.log(executarOperacao(10, 5, divisao));       // 2
console.log(executarOperacao(10, 0, divisao));       // Erro: divisão por zero!



















