    const lista2 = ["0","1"];
    const lista8 = ["0","1","2","3","4","5","6","7"];
    const lista10 = ["0","1","2","3","4","5","6","7","8","9"];
    const lista16 = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    
    function calcular() {
        // Resetando o Resultado da Div Output
        divOutput.innerHTML = ``;
        // Coletar oos numeros inseridos pelo user
        let verificarPrimeiroNumero = iptNumero1.value.trim().toLowerCase();
        let verificarSegundoNumero = iptNumero2.value.trim().toLowerCase();

        // vamos dividir i input em uma array
        var arrayInputPrimeiroNumero = verificarPrimeiroNumero.split("");
        var arrayInputSegundoNumero= verificarSegundoNumero.split("");

        if (arrayInputPrimeiroNumero[0] == "-" || arrayInputSegundoNumero[0] == "-" ){ // caso os numeros sejam negativos
            // retirar o símbolo de - das arrays para nn ter mais conflitos na parte das validações
            arrayInputPrimeiroNumero = arrayInputPrimeiroNumero.filter((element) => element !== "-");
            arrayInputSegundoNumero = arrayInputSegundoNumero.filter((element) => element !== "-");
        } 

        // Coletar as bases dos numeros escolhidos
        var basePrimeroNumero = Number(slctBasePrimeiroNumero.value);
        var baseSegundoNumero = Number(slctBaseSegundoNumero.value);

        var isCharErradoPrimeiroNumero = false;
        var isCharErradoSegundoNumero = false;
 
        for (i=0; i<arrayInputPrimeiroNumero.length; i++){
            isCharErradoPrimeiroNumero = !eval("lista"+basePrimeroNumero).includes(arrayInputPrimeiroNumero[i]);
            if(isCharErradoPrimeiroNumero){
                break;
            }
        }

        for (i=0; i<arrayInputSegundoNumero.length; i++){
            isCharErradoSegundoNumero = !eval("lista"+baseSegundoNumero).includes(arrayInputSegundoNumero[i]);
            if(isCharErradoSegundoNumero){
                break;
            }
        }


        if (verificarPrimeiroNumero == "" || verificarSegundoNumero == "") { // caso o usuário não tenha inserido nenhum valor
            alert('Informe os numeros para realizar o cálculo, um dos campos está vazio!');
        } else if(basePrimeroNumero == 0 || baseSegundoNumero == 0){// caso o usuário não tenha escolhido nenhuma base dos numeros que foram informados
            alert('Selecione as bases dos numeros para realizar o cálculo!');
        } else if(isCharErradoPrimeiroNumero){
            alert(`A base ${basePrimeroNumero} do primeiro número informado contém apenas os seguintes caracteres: ${eval("lista"+basePrimeroNumero)}`);
        } else if(isCharErradoSegundoNumero){
            alert(`A base ${baseSegundoNumero} do segundo número informado contém apenas os seguintes caracteres: ${eval("lista"+baseSegundoNumero)}`);
        } else{  // Caso passe das verificações            
            // Transformando qualquer base de amboas os números em decimal
            var primeiroNumeroBaseDecimal = parseInt(verificarPrimeiroNumero, basePrimeroNumero);
            var segundoNumeroBaseDecimal = parseInt(verificarSegundoNumero, baseSegundoNumero);

            var txtBaseEscolhidaPrimeiroNumero = slctBasePrimeiroNumero.options[slctBasePrimeiroNumero.selectedIndex].text;
            var txtBaseEscolhidaSegundoNumero = slctBaseSegundoNumero.options[slctBaseSegundoNumero.selectedIndex].text;

            // Coletar qual operação o user deseja realizar
            var operacaoDesejada = slctOperacaoDesejada.value; 

            // Coletar o valor escolhido pelo user para mostrar as bases desejadas
            var baseConverter = Number(baseOutput.value);
            // Coletar o nome da Base escolhida
            var txtBaseEscolhidaConverter = baseOutput.options[baseOutput.selectedIndex].text;

            if (operacaoDesejada == "1"){
                // realizar todas as operações
                var resultadoAdicao = primeiroNumeroBaseDecimal + segundoNumeroBaseDecimal;
                var resultadoSubtracao = primeiroNumeroBaseDecimal - segundoNumeroBaseDecimal;
                var resultadoMultiplicacao = primeiroNumeroBaseDecimal * segundoNumeroBaseDecimal;
                var resultadoDivisao = primeiroNumeroBaseDecimal / segundoNumeroBaseDecimal;
                var resultadoExponenciacao = primeiroNumeroBaseDecimal / segundoNumeroBaseDecimal;

                // guardar em um objeto/dicionário
                dicionarioResultados = {
                    'Adição':resultadoAdicao,
                    'Subtração':resultadoSubtracao,
                    'Multiplicação':resultadoMultiplicacao,
                    'Divisão':resultadoDivisao,
                    'Exponenciação':resultadoExponenciacao,
                };

                // converter e informar cada um dos resultados de acordo com os numeros e bases informadas
                for (let [operacao, resultado] of Object.entries(dicionarioResultados)){
                    resultado = resultado.toString(baseConverter).toUpperCase();
                    divOutput.innerHTML += `
                        <h5>O resultado da <b>${operacao}</b>  dos valores <b>${verificarPrimeiroNumero}</b>  (em <b>${txtBaseEscolhidaPrimeiroNumero}</b> ) e <b>${verificarSegundoNumero}</b> (em <b>${txtBaseEscolhidaSegundoNumero})</b> é <b>${resultado}</b> (em <b>${txtBaseEscolhidaConverter}</b>).</h5>
                        <br>  
                    `;
                }
                divOutput.innerHTML += `<br>`;
                // setta um espaço em relação ao topo da página para uma estilização
                calculadora.style.marginTop = "420px";

            } else {
                // guardar o valor da operação que foi selecionada no select
                var txtOperacaoDesejada = `${slctOperacaoDesejada.options[slctOperacaoDesejada.selectedIndex].text}`;
                // vai calcular o resultado com os dois números e a operação aritmética selecionados
                var resultado = eval(`${primeiroNumeroBaseDecimal} ${operacaoDesejada} ${segundoNumeroBaseDecimal}`);
                // converter para a base de output em que o user escolheu
                resultado = resultado.toString(baseConverter).toUpperCase();
        
                // mostra a mensagem com todas as informações
                divOutput.innerHTML = `
                    <h5>O resultado da <b>${txtOperacaoDesejada}</b> dos valores <b>${verificarPrimeiroNumero}</b> (em <b>${txtBaseEscolhidaPrimeiroNumero}</b>) e <b>${verificarSegundoNumero}</b> (em <b>${txtBaseEscolhidaSegundoNumero}</b> )</b> é <b>${resultado} (em <b>${txtBaseEscolhidaConverter}</b>).</h5>
                    <br><br>    
                `;
                // setta um espaço em relação ao topo da página para uma estilização
                calculadora.style.marginTop = "50px";
            }
        }
    }