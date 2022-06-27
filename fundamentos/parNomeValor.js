//par nome/valor
const saudacao = 'opa' //contexto lexico 1 local no qual a variavel foi definida fisicamente no seu codigo

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2 - procura no contexto menor, caso nao tiver vai pro contexto maior (acima)
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Rafael',
    idade: 32,
    peso: 85,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
