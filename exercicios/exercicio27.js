//Criar função que receba os parametros alturas e taxa de crescimento anuais
//entre duas crianças e calcule se se exixte uma criança menor, caso exista,
//verificar se a criança menor irá ultrapassar a maior e em quantos anos isso acontecerá
//Utilizar cm como un de medida
//Setar limite de crescimento até os 19 anos, e que as duas criançã possuema mesma idade.


const criancaMaior = {
    altura: 100,
    txCrescimento: 7,
    idade: 5
} 

const criancaMenor = {
    altura: 90,
    txCrescimento: 8,
    idade: 5
} 

function cresCriancas(alturaAtual, txCrescimentoAnual, idade){
    altMax = idade*txCrescimentoAnual+alturaAtual
    return altMax
}

function main(){

    for (let ano = 1; ano < 14; ano++){
        let altCriancaMaior = cresCriancas(criancaMaior.altura, criancaMaior.txCrescimento, ano)
        let altCriancaMenor = cresCriancas(criancaMenor.altura, criancaMenor.txCrescimento, ano)

        if (altCriancaMenor > altCriancaMaior){
            console.log(`   A criança menor ultrapassou a maior com ${ano+criancaMenor.idade} anos de idade, ficando 
com ${altCriancaMenor}cm de altura e a criança que era maior com ${altCriancaMaior}cm de altura`)
            ano = 14
        } 
    } 
}


main()