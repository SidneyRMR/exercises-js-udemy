const escola = 'Cod3r'

console.log(escola.charAt(4)) //Mosta a letra que esta na casa 4, caso fosse na casa 5 não daria erro e sim retornaria m valor vazio

console.log(escola.charCodeAt(3)) //Retorna valores da tabela UNICODE ASCII

console.log(escola.indexOf('3'))

console.log(escola.substring(1))

console.log(escola.substring(0, 3)) // vai do indice 0 ao indice 3 sem incluir o indice final(3)

console.log('Escola '.concat(escola).concat('!')) //Função para concatenar strings
console.log('Escola '+ escola + '!')

console.log(escola.replace(3, 'e')) //Substitui o numero 3 por 'e'

console.log('Ana, Maria, Pedro')
console.log('Ana, Maria, Pedro'.split(',')) //Quebra a string a partir das virgulas e transfoma em um array
