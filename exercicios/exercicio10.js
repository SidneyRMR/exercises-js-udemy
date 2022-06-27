let nota = ([67, 54, 77, 37, 22, 89, 52, 57])


function isInt(verIfInt){
    if (verIfInt%3 == 0){
        return (true)
    } else {
        return (false)
    }
}

for (i in nota){
    console.log(`A divisão por 3 pelo número ${nota[i]} é`, isInt(nota[i]))
}
