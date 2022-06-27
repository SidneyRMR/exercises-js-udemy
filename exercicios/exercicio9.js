let nota = ([67, 54, 77, 37, 22, 89, 52, 57])


for (i in nota){
    let cont = Number(i) + 1
    
    if (nota[i] < 38){
        console.log(`Aluno ${cont} tirou ${nota[i]}, portanto está Reprovado!`)
    }

    else if ((nota[i] > 37) && ((nota[i] % 5) == 3) || ((nota[i] % 5) == 4)){
        arrendCima = (Math.ceil(nota[i]/5)) * 5
        console.log(`Aluno ${cont} tirou ${arrendCima}, portanto está Aprovado!`)
    }
    
    else if ((nota[i] > 37) && ((nota[i] % 5) == 1) || ((nota[i] % 5) == 2)){
        arrendBaixo = (Math.floor(nota[i]/5)) * 5
        console.log(`Aluno ${cont} tirou ${arrendBaixo}, portanto está Aprovado!`)
    }
}