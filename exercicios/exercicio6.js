function formatResult(x){
    return x.toLocaleString('pt-BR',{ minimumFractionDigits: 2})
}


function jsimples(capitalInicial, txJuros ,tempAplicacao){
    let resultJurSimples = capitalInicial +(capitalInicial * ((txJuros/100) * tempAplicacao))
    return console.log(`O resuldado da aplicação em regime de juros simples é R$${formatResult(resultJurSimples)}`)
}


function jcomposto(capitalInicial, txJuros ,tempAplicacao){
    let resultJurCompostos = (capitalInicial * (1 + (txJuros/100)) ** tempAplicacao)
    return console.log(`o resultado da aplicação em regime de juros compostos é R$${formatResult(resultJurCompostos)}`)
}

(function(){
    let capInicial = 100000
    let jurAnual = 18
    let tempAplicadoAnual = 10
    return jsimples(capInicial, jurAnual, tempAplicadoAnual) ,
    jcomposto(capInicial, jurAnual, tempAplicadoAnual)
})()