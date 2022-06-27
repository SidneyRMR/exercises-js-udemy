//Usando uma estrut. de rep for, faça uma função que percora um vetor e conte
//quantos números deste valor estão no intervalo 10,20
//e conte tambem quantos estão fora, escrevendo essas informações pro usuário.

let vetor = [2, 3, 5, 12, 15, 18, 22, 30, 35, 47, 51]


function contarInOutRange(x){
    let contIn = 0
    let contOut = 0
    for (i in x){
        if ((x[i] >= 10) && (x[i] <= 20)){
            contIn++
        } else {
            contOut++
        }
    }
    console.log(`Foram contados ${contIn} números dentro e ${contOut} números fora do intervalo `)
}

contarInOutRange(vetor)