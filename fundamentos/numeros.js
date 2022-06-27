const peso1 = 1.05
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.Integer(peso1))
//caso peso1 fosse 1.1 ele daria false no console acima

const avaliacao1 = 9.872
const avaliacao2 = 7.675

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //Converte o valor em binario
console.log(typeof media)
console.log(media) // Existem varias funcoes para utilizar com o tipo de dado utilizando o ponto



