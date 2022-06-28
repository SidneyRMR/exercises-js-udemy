const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log('')

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//ou
console.log('')
Object.entries(pessoa).forEach(([chave, valor]) => { // usando destructuring para desfazer o array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    values: '01/01/2017'
})

pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Objct.assign (ECMAScrit 2015)
const dest = {a:1}
const o1 ={b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //concatena todos os elemntos
console.log(obj)