// funcao principal para calcular o resultado com base nas entradas do usuario
function calcular() {

    const num1 = document.getElementById('iptNumero1').value;
    const base1 = parseInt(document.getElementById('selectBasePrimeiroNum').value);
    const num2 = document.getElementById('iptNumero2').value;
    const base2 = parseInt(document.getElementById('selectBaseSegundoNum').value);

    const operacao = document.getElementById('selectOperacaoDesejada').value;
    const baseOutput = parseInt(document.getElementById('baseOutput').value);

    // validacao dos números de acordo com suas bases
    if (!isValidNumber(num1,base1) || !isValidNumber(num2, base2)){
        alert(`Um dos números não é válido para a base.`);
        return;
    }

    // converte os numeros de suas bases originais para decimal
    const decimalNum1 = parseInt(num1, base1);
    const decimalNum2 = parseInt(num2, base2);

    // executa a operação correspondente
    const resultado = calcularOperacao(decimalNum1, decimalNum2, operacao);

    // converte o resultado de volta para a base de saida e exibe
    document.getElementById('divOutput').innerHTML = resultado.toString(baseOutput).toUpperCase();

}

// funcao para calcular a operação
function calcularOperacao(a, b, operacao) {
    switch (operacao) { // estrutura de controle que seleciona e executa um bloco dentre multiplas opcoes
        case '+': return a + b;
        case '-': return a - b; // executa a operação correspondente usando a e b
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Erro: Divisão por zero';
        default: return 'Operação inválida';
    }
}

// funcao para validar se um número e valido de acordo com a base especificada
function isValidNumber(num, base) {
    const charValido = obterCharValidos(base);
    for (let char of num) {
        if (!charValido.includes(char.toUpperCase())) {
            return false;
        }
    }
    return true;
}

// funcao para retornar os caracteres validos de acordo com a base
function obterCharValidos(base) {
    const matrizCharValido = {
        2: ['0', '1'], // binario
        8: ['0', '1', '2', '3', '4', '5', '6', '7'], // octal
        10: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // decimal
        16: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] // hexadecimal
    };
    return matrizCharValido[base] || []; // retorna caracteres validos ou um array vazio
}