//Calcular media aritmetica dos valores de um vetor de inteiros

let vetor = [2, 3, 5, 12, 15, 55, 22, 3, 35, 10, 19]


soma = 0
for (i in vetor){
    soma = soma + vetor[i]
}

mediArit = soma/vetor.length

console.log(`A média aritmética deste vetor é ${mediArit.toFixed(2)}`)