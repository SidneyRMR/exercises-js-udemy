//Ler um vetor de números inteiro e imprimir quantos são pares e quantos são ímpares



let vetor = [2, 3, 5, 12, 15, 18, 22, 30, 35, 47, 51]

function contParesImpares(x){
    let contPares = 0
    let contImpares = 0
    for (i in x){


        if(x[i]%2 == 0){
            contPares++
        } else {
            contImpares++
        }
    }
    console.log(`Foram encontrados ${contPares} números pares e ${contImpares} números ímpares.`)
}

contParesImpares(vetor)