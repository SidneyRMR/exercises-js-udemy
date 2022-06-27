//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando um funcao arrow em uma variável
const soma = (a, b) => {// a flecha é uma forma reduzida de chamar a função
    return a + b

}

console.log(soma(2, 3))

//Retorno implicito, arrow function, function em uma linha só
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!') // transforma o console.log em uma função mais pratica de imprimir as mensagens tela

const print = a => console.log(a)

print('Imprimir na tela sem usar console.log diretamente, muito mais pratico!!')
