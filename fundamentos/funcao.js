// Função sem retorno
// Funções devem ter nomes muito bem pensados e auto explicativos
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // somaria um valor inteiro com um undefined, gerando NaN como resposta
imprimirSoma(2, 5, 4, 5, 6) //Utiliza somente os 2 primeiros valores neste caso, o restante ignora
imprimirSoma()

//Função com retorno
function soma(a, b){
    return a + b
}

console.log(soma(2, 3)) // Chamo a função dentro do console pra que ele imprima o resultado

console.log(soma(2, 3))
console.log(soma(2)) //Retorna NaN
console.log(soma()) //Retorna NaN