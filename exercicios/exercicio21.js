//Criar programa que identifica o valor a ser pago por um plano de saude 
//de acordo com a idade do conveniado. considerando que todos pagam 100 reais
//mais um adicional de acordo com a tabela:
//1)Crianças com menos de 10 anos pagam 80
//2)De 10 a 30 anos pagam 50 
//3)De 30 a 60 anos pagam 95
//4)Acima de 60 anos pagam 130


let idadesConveniadosTeste = [8, 12, 30, 45, 62, 78]

for (i in idadesConveniadosTeste){
    let valConvPadrão = 100
    if (idadesConveniadosTeste[i] < 10){
        valorConvenio = valConvPadrão + 80
        console.log(`Crianças com menos de 10 anos pagam ${valorConvenio}`)   

    } else if ((idadesConveniadosTeste[i] > 10 && (idadesConveniadosTeste[i]) <= 30)) {
        valorConvenio = valConvPadrão + 50
        console.log(`Pessoas entre 11 e 30 anos pagam ${valorConvenio}`)  

    } else if ((idadesConveniadosTeste[i] > 30 && (idadesConveniadosTeste[i]) <= 60)) {
        valorConvenio = valConvPadrão + 95
        console.log(`Pessoas entre 31 e 60 anos pagam ${valorConvenio}`)  

    }else if (idadesConveniadosTeste[i] > 60) {
        valorConvenio = valConvPadrão + 130
        console.log(`Idosos acima de 60 anos pagam ${valorConvenio}`)  
    }
}