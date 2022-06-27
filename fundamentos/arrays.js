// arrays em js nao tem tamanho fixo, nem tipo fixo
const valores  = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined
console.log(valores.length)

valores[4]  = 10
console.log(valores[4])

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // o metodo .push adiciona os valores dentre das chaves na sequencia do array
console.log(valores)
console.log(valores.length) 

console.log(valores.pop()) // retorna o ultimo valor do array e o retira do array
console.log(valores)
delete valores[0]
console.log(valores)