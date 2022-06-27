const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
// se retornar true o elemento é adicionado no array, caso false, nao adiciona no array
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)


// nota => nota < 7 é chamdo de callback, testa se a nota corrent é menor que 7, caso for retorna true e salva no array notasBaixas3
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


//mesma coisa que acima, porem criando a função notaMenorQue7
const notaMenorQue7 = nota => nota < 7 //isto que é o callback, faz o teste, se é positivo ou negativo
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)