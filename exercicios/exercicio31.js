//Percorrer um vetor de num inteiros, contar numeros negativos e mostrar no console

let vetor = [2, -5, 5, 12, -10, 55, 22, -1, 35, -22, 19]

let contNeg = 0
for (i in vetor){
    if (vetor[i] < 0){
        contNeg++
    }
}
console.log(`Foram encontrados ${contNeg} números negativos neste vetor`)