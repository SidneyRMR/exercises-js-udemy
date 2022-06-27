//Algoritmo que percorra valores inteiros e defina o maior e o menor dentro do vetor

let vetor = [2, 3, 5, 12, 15, 55, 22, 3, 35, 10, 19]

vetor.sort()
let menorValor = vetor[0]

vetor.reverse()
let maiorValor = vetor[0]

console.log(menorValor, maiorValor)