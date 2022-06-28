//Criar uma função que receba dois vetores de tamanho igual e troque seus elementos de 
//modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do do vetorB
//e vice versa, e assim sucessivamente. faça a troca sem utilizar um variavel auxiliar.

let vetorA = [10, 3, 2, 5, 9, 1]
let vetorB = [2, 5, 8, 4, 11, 7]

function trocaVetores(x, y){
    [x, y] = [y, x]
    console.log(x)
    console.log(y)
}

trocaVetores(vetorA, vetorB)