//Escrever uma função que receba dois paramentros inicio e fim. Essa função deve imprimir todos
//os numeros impares que estão entre esses valores. por padrão os valores devem ser 0 para inicio
//e 100 para fim. atente para corrigir a ordem dos parametros caso a função receba o valor maior 
//antes do menor.

let valorInicial = 0
let valorFinal = 100

function imprimirImparesNoIntervalo(inicio, fim){

    let arrayResult = []
    for (i = inicio; i <= fim; i++){
        if(i%2 == 1){
            arrayResult = arrayResult.concat(i, 'ímpar')
            //console.log(i)
        }

    }
    return console.log(arrayResult)
}

imprimirImparesNoIntervalo(valorInicial, valorFinal)
