/*Criar 3 vetores, chamados vetorInteiro, vertorString, vetorDouble. Cada um destes vetores deverá
 * conter 4 valores, de acordo com seus nomes. 
 * Criar uma função de união concat() de duas maneira diferentes para unir os vetores
 * Mostrar resultado na tela, todos os elementos dos vetores devem aparecer na tela.
*/

vetorInteiro = [10,20,30,40]
vertorString = ['ola', 'eu', 'sou', 'programador']
vetorDouble = [10.5, 15.6, 14,9, 17,3]

let somaLength = vetorInteiro + vertorString + vetorDouble

function somaVetores1(){
    aux = vetorInteiro
    aux.push(vertorString)
    aux.push(vetorDouble)
    //aux.push(vetorInteiro)
    //resultadoSomaVetores = vetorInteiro + vertorString + vetorDouble
}

function concat(){
    somaDeVetoresDiferentes1 = somaVetores1()
    console.log(somaLength)
    console.log('\n',aux)
}


concat()