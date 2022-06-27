/* Calculadora, 
 * 1 - escolher operação
 * 2 - ler/receber operadores
 * 3 - fazer o calculo e mostrar na tela
*/

const prompt = require('prompt-sync')()


function soma(){
    num1 = getValue1()
    num2 = getValue2()
    result = num1 + num2
    console.log(`O resultado da soma é: ${num1} + ${num2} = ${result}`)
}

function sub(){
    num1 = getValue1()
    num2 = getValue2()
    result = num1 - num2
    console.log(`O resultado da subtração é: ${num1} - ${num2} = ${result}`)
}

function mult(){
    num1 = getValue1()
    num2 = getValue2()
    result = num1 * num2
    console.log(`O resultado da multiplicação é: ${num1} * ${num2} = ${result}`)
}

function div(){
    num1 = getValue1()
    num2 = getValue2()
    result = num1 / num2
    console.log(`O resultado da divisão é: ${num1} / ${num2} = ${result.toFixed(2)}`)
}

function getValue1(){
    return  parseFloat(prompt('Escolha o primeiro valor: '))
}
function getValue2(){
    return parseFloat(prompt('Escolha o segundo valor: '))
}


function operacao(){
    console.log('#################################################')
    console.log('##### Escolha qual operação deseja realizar #####')
    console.log('# Digite 1 para somar | Digite 2 para subtrair ##')
    console.log('Digite 3 para dividir | Digite 4 para multiplicar')
    let oper = parseFloat(prompt('Escolha: '))
    switch(oper){
        case 1: 
            soma()
            break
        case 2: 
            sub()
            break
        case 4: 
            mult()
            break
        case 3: 
            div()
            break
        default:
            console.log('Entrada inválida')
    }
  
}

operacao()