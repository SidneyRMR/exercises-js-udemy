//Exibir se é dia útil, fds ou dia inválido
//considerando domingo como dia primeiro e sábado é o dia 7

function qualDia(dia){
    if ((dia > 31) || (dia < 1)){
        console.log(`${dia} é dia inválido`)
    } else if (dia == 1 || dia == 7 || dia == 8 || dia == 14 || dia == 15 || dia == 21 || dia == 22 || dia == 28 || dia == 29) {
        console.log(`${dia} é final de semana`)
    } else {
        console.log(`${dia} é dia útil`)
    }
}

let contador = 0
while (contador <= 32){
    qualDia(contador)
    contador++
}
