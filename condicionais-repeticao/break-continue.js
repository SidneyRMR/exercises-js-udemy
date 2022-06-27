//break é usado dentro de laços for, while e switch

//continue é usado dentro de laços for e while

//tentar evitar os o uso deles, buscar outras alternativas, pois eles sao desviadores de flucos e podem gerar mais confusão

const nums = [1,2,3,4,5,6,7,8,9,,10]

for (x in nums){
    if (x == 5){
        break //age sempre ao bloco mais proximo, no caso somente o if, nao o for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue //interrompe a repetição atual e vai para a proxima
    }
    console.log(`${y} = ${nums[y]}`)
}

