const imprimirResultado = function (nota){
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // no JS tem que colocar o break para parar de executar o swicth pois senao ele ira execuar todos os case abaixo
        case 8: case 7:
            console.log('Aprovado')
            break // causa somente a saida do bloco, mas continua executando o codigo após o bloco
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(9)
imprimirResultado(7.9)
imprimirResultado(6)
imprimirResultado(2.7)
imprimirResultado(-1)
