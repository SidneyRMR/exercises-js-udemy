//Escrever duas funções, uma para prograssão aritmetica e outra para uma progressão
//geometrica que recebam como parametros um numero n(num de temos), a1(primeiro termo)
//e r(razão) e escreva os n termos, bem como a soma dos elementos.


let numTermos = 10
let primTermo = 10
let razao = 5

function progAritmetica(n, a1, r){
    let arrayArit = []
    for (i = 0; i < n; i++){
        a1 = a1 + r
        arrayArit = arrayArit.concat(a1)
    }
    console.log('Progressão Aritmética', arrayArit)
}

function progGeometrica(n, a1, r){
    let arrayArit = []
    for (i = 0; i < n; i++){
        a1 = a1 * r
        arrayArit = arrayArit.concat(a1)
    }
    console.log('Progressão Geométrica', arrayArit)
}

progAritmetica(numTermos, primTermo, razao)

progGeometrica(numTermos, primTermo, razao)