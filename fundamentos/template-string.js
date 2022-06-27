const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

const print = x => console.log(x)

console.log(`Ei...${up('cuidado')}!`) //converte o texto 'cuidado' para maiusculo.
//templete de string permite usar quebra de linhas e as expressoes e metodos devem ser colocadas dentro de chaves



print('ola mundo, esta é minha função de imprimir')
