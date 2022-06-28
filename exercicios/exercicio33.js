/*Criar 3 vetores, chamados vetorInteiro, vertorString, vetorDouble. Cada um destes vetores deverá
 * conter 4 valores, de acordo com seus nomes. 
 * Criar uma função de união concat() de duas maneira diferentes para unir os vetores
 * Mostrar resultado na tela, todos os elementos dos vetores devem aparecer na tela.
*/

let vetorInteiro = [10,20,30,40]
let vetorString = ['ola', 'eu', 'sou', 'programador']
let vetorDouble = [10.5, 15.6, 14,9, 17,3]

function somaVetores1(){
    let aux = []
    aux = vetorInteiro.concat(vetorString)
    aux = aux.concat(vetorDouble)
    return aux
}

function somaVetores2(){
    let aux = []
    aux = String.prototype.concat(vetorInteiro, ',', vetorString,',', vetorDouble)
    aux = aux.split(',')
    return aux
}

function Main(){
    console.log(somaVetores1())
    console.log(somaVetores2())
}


Main()