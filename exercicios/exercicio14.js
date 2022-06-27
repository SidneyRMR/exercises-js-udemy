function temFruta(nomeFruta){
    switch (nomeFruta){
        case 'maca': case 'maçã': 
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi': 
            console.log('Estamos com escassez de kiwi')
            break
        case 'melancia': 
            console.log('Aqui está, são 3 reais quilo')
            break
        default:
            console.log('Erro, nome não reconhecido!')
    }
}

temFruta('abacaxi')
temFruta('maçã')
temFruta('maca')
temFruta('kiwi')
temFruta('melancia')


