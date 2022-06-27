


let Pontos = ('10 20 20 8 25 3 0 30 1')
let arrayPontos = Pontos.split(' ')
//console.log(arrPontos)

function comparaPontos(x){
    const recordsPontos = []
    
    let count = 0
    for(let i in x){ 
        if (Number((x[i-1])) < Number(x[i]) && Number(x[i-1]) != Number(x[i])){
            recordsPontos.push(x[i])   
        }
    }
    console.log(`Pedro bateu ${recordsPontos.length} vezes o próprio recorde.`)
}
comparaPontos(arrayPontos)