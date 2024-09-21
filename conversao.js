function converter() {

    // pegando os valores da input
    var inputValue = document.getElementById('inputValue').value;
    var inputBase = document.getElementById('inputBase').value;

    // validacao de dados caso fique em branco
    if (!validarEntrada(inputValue, inputBase)) {
        alert('Por favor, insira um número válido para a base selecionada.');
        return;
    }

    // utilizacao do parseint p converter o numero para a base necessaria
    var decimalValue = parseInt(inputValue, inputBase === 'hexadecimal' ? 16 : inputBase === 'octal' ? 8 : inputBase === 'binario' ? 2 : 10);
    var outputHTML = '';

    // checagem da conversao e fazendo aparecer na tela o valor convertido
    if (document.getElementById('convertDecimal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Decimal: ${decimalValue}</p>`;
    }
    if (document.getElementById('convertHexadecimal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`; // utilizacao do uppercase p deixar em maiuscula
    }
    if (document.getElementById('convertOctal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Octal: ${decimalValue.toString(8)}</p>`;
    }
    if (document.getElementById('convertBinario').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Binário: ${decimalValue.toString(2)}</p>`;
    }
    document.getElementById('output').innerHTML = outputHTML;
}

// validando os numeros colocados na entrada
function validarEntrada(inputValue, inputBase) {

    var validChars = '';

    if (inputBase === 'decimal') {
        validChars = '0123456789';
    }
    else if (inputBase === 'hexadecimal') {
        validChars = '0123456789ABCDEFabcdef';
    }
    else if (inputBase === 'octal') {
        validChars = '01234567';
    }
    else if (inputBase === 'binario') {
        validChars = '01';
    }

    // criando um loop - nao entendi ainda como funciona
    for (var i = 0; i < inputValue.length; i++) { // loop através de cada caractere da string inputValue
        // verifica se o caractere atual não está na lista de caracteres válidos
        if (validChars.indexOf(inputValue[i]) === -1) {
            return false; // retorna false se encontrar um caractere inválido
        }
    }
    return true; // retorna true se todos os caracteres forem válidos

}