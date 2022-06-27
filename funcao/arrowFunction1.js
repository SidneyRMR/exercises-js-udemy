let dobro = function (a){
    return a * 2
}

dobro = (a) => { //funçao arrow, ela sempre é anonima, caso queira chamada devemos armazena-la em uma variavel
    return 2 * a
}

dobro = a => 2 * a //mesma coisa acima, porem com sintaxe mais reduzida


console.log(dobro(Math.PI))

let ola = function(){//Função comum
    return 'Ola'
}

ola = () => 'Olá' //igual acima, porem mais reduzida, é a forma padrao da função arrow

ola = _ => 'Olá' //igual acima

console.log(ola())// se colocar sem os parametros ele retorna o tipo do objeto, no caso função que se chama ola

