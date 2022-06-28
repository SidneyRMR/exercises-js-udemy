//criar duas funções que recebam dois parametros, um vetor com apenas numeros
//e um numero inteiro. A primeira função deve retornar outro vetor que será resultado 
//da multiplicação de cada elemento pelo número passado como parametro.
//A segunda função fará o mesmo da primeira função se e somente se o valor do elemento 
//for maior que 5.

const vetor = [1, 9, 2, 7, 5, 0]
const vetor1 = [1, 9, 2, 7, 5, 0]
const numInt = 12

// //Função que multiplica cada elemento do vetor pelo numero inteiro
function multInt(vet, int){
    vetMultInt = vet
    for (let i in vetMultInt){
        vetMultInt[i] = vetMultInt[i] * int
    }
    return console.log(vetMultInt)
}

//função que multiplica cada elemento do vetor somente se o elemento for maior que 5
function multIntMaiorQuECinco(vet, int){
    vetMultIntMaiorQuECinco = vet
    for (let i in vetMultIntMaiorQuECinco){
        if(vetMultIntMaiorQuECinco[i] > 5){
            vetMultIntMaiorQuECinco[i] = vetMultIntMaiorQuECinco[i] * int
        }
        
    }
    return console.log(vetMultIntMaiorQuECinco)
}


multInt(vetor, numInt)
multIntMaiorQuECinco(vetor1, numInt)