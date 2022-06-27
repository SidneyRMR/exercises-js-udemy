const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento que ele encontrar no array ira listar 
console.log('')
fabricantes.forEach(fabricante =>console.log(fabricante)) //voce passa a funcao e ele chama de volta