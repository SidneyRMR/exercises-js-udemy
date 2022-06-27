let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)    //assim mostrara o numero 1
console.log(!!isAtivo) //pode ser usado para transformar a var em boolean, duas negaçao para que ele mostre o bool original
console.log(!isAtivo) //nega o valor 1, dizendo que é false, pois 0 é false e 1 é true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //espaco em branco é considerado verdadeiro
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //vazio é considerado false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa' || 123)) // || significa ou, entao ele vai retornar true caso tiver pelo menos 1 valor verdadeiro

let nome = ''
console.log(nome || 'Desconecido') // Imprime o tiver valor ou seja o que for true
nome = 'Rafa'
console.log(nome || 'Desconecido') // Neste caso como a var nome tem valor, entao ela é imprimida
console.log('Desconecido' || nome ) // Neste caso como inverteu a ordem, e os dois valores sao true, é impresso somente o primeiro valor
