const imprimiResultado = function(nota){
    if (nota >= 7 ){
        console.log('Aprovado')

    } else {
        console.log('Reprovado')
    }
}


imprimiResultado(10)
imprimiResultado(6)
imprimiResultado('epa!') //Por ser fracamente tipada ele resulta em negativo e imprime 'Reprovado'