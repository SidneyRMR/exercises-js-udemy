//Criar programa que informa quantas cedulas são necessarias para entregar o minimo
//para um determinado valor informado pelo usuário, considerar notas 100, 50, 10, 5, 1
//O programa deve mostrar apenas as notas utilizadas. 
//Ex. ao solicitar 18, o programa deve informar: 1 nota de 10, 1 nota de 5 e 3 notas de 1


const prompt = require('prompt-sync')()

function minNotas(){
    let lerValor = Number(prompt('Digite o valor para saber o mínimo de notas necessárias: '))

    let aux = 0

    let cem = lerValor/100
    let cedulasCem = Number.parseInt(cem)
    aux = lerValor - cedulasCem*100

    cinquenta = aux/50
    let cedulasCinquenta = Number.parseInt(cinquenta)
    aux = lerValor - cedulasCinquenta*50 - cedulasCem*100

    dez = aux/10
    let cedulasDez = Number.parseInt(dez)
    aux = lerValor - cedulasDez*10 - cedulasCinquenta*50 - cedulasCem*100

    cinco = aux/5
    let cedulasCinco = Number.parseInt(cinco)
    aux = lerValor - cedulasCinco*5 - cedulasDez*10 - cedulasCinquenta*50 - cedulasCem*100

    um = aux/1
    let cedulasUm = Number.parseInt(um)
    aux = lerValor - cedulasUm*1 - cedulasCinco*5 - cedulasDez*10 - cedulasCinquenta*50 - cedulasCem*100

    if (cedulasCem > 0){
        console.log(`Você precisa de ${cedulasCem} nota(s) de R$100`)
    }
    if (cedulasCinquenta > 0){
        console.log(`Você precisa de ${cedulasCinquenta} nota(s) de R$50`)
    }
    if (cedulasDez > 0){
        console.log(`Você precisa de ${cedulasDez} nota(s) de R$10`)
    }
    if (cedulasCinco > 0){
        console.log(`Você precisa de ${cedulasCinco} nota(s) de R$5`)
    }
    if (cedulasUm > 0){
        console.log(`Você precisa de ${cedulasUm} nota(s) de R$1`)
    }
}

minNotas()