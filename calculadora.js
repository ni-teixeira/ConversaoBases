// Função principal para calcular o resultado com base nas entradas do usuário
function calcular() {
    const num1 = document.getElementById('iptNumero1').value;
    const base1 = parseInt(document.getElementById('selectBasePrimeiroNum').value);
    const num2 = document.getElementById('iptNumero2').value;
    const base2 = parseInt(document.getElementById('selectBaseSegundoNum').value);
    const operacao = document.getElementById('selectOperacaoDesejada').value;
    const baseOutput = parseInt(document.getElementById('baseOutput').value); // converte uma string em um número inteiro, considerando uma base numérica.
    
    // Validação dos números de acordo com suas bases
    if (!isValidNumber(num1, base1)) {
        alert(`Número ${num1} não é válido para a base ${base1}.`);
        return;
    }

    if (!isValidNumber(num2, base2)) { // checa se todos os caracteres de um número são válidos para uma base específica.
        alert(`Número ${num2} não é válido para a base ${base2}.`);
        return; 
    }

    // Converte os números de suas bases originais para decimal
    const decimalNum1 = parseInt(num1, base1);
    const decimalNum2 = parseInt(num2, base2);
    
    // Variável para armazenar o resultado
    let resultado; // declara variáveis com escopo de bloco e permite que seus valores sejam alterados.

    // Mapeamento das operações
    // Define um objeto chamado 'operacoes'
    const operacoes = {
    '+': (a, b) => a + b,  // Função que recebe dois parâmetros (a e b) e retorna sua soma
    '-': (a, b) => a - b,  // Função que recebe dois parâmetros (a e b) e retorna a diferença (a menos b)
    '*': (a, b) => a * b,  // Função que recebe dois parâmetros (a e b) e retorna o produto (a vezes b)
    '/': (a, b) => ( b !== 0 ? a / b : 'Erro: Divisão por zero') // Se b não for zero, retorna a divisão; caso contrário, retorna uma mensagem de erro
};
    // 'a' e 'b' são nomes de parâmetros que representam os números que serão operados.

    // Executa a operação correspondente
    resultado = operacoes[operacao] ? operacoes[operacao](decimalNum1, decimalNum2) : 'Operação inválida';
    // Atribui o resultado da operação selecionada à variável 'resultado'
    // Verifica se existe uma função para o operador selecionado
    // Se existir, chama a função correspondente com os números convertidos
    // Se não existir, atribui uma mensagem de erro
    // ?: Inicia o operador ternário; se a condição anterior for verdadeira, executa o que está após o ?.

    // Converte o resultado de volta para a base de saída e exibe
    document.getElementById('divOutput').textContent = resultado.toString(baseOutput).toUpperCase();
}

    // Função para validar se um número é válido de acordo com a base especificada
    function isValidNumber(num, base) {
    const validChars = getValidCharsForBase(base);
    for (let char of num) {
        if (!validChars.includes(char.toUpperCase())) {
            return false;
        }
    }
    return true;
}

// Função para retornar os caracteres válidos de acordo com a base
function getValidCharsForBase(base) {
    const validCharsMap = {
        2: ['0', '1'], // Binário
        8: ['0', '1', '2', '3', '4', '5', '6', '7'], // Octal
        10: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Decimal
        16: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] // Hexadecimal
    };
    return validCharsMap[base] || []; // Retorna caracteres válidos ou um array vazio
}
