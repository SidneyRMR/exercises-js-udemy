const soma = function (x,y){
    return x + y
}

const imprimirResultado =  function(a,b,operacao = soma){
    console.log(operacao(a,b))

}

imprimirResultado(3,4)

console.log(soma(3,4))

imprimirResultado(3, 4, (x, y) => x * y)


const pessoa ={
    falar: function(){ // posso apagar a 'function' que ira funcionar da mesma forma!
        console.log('Opa')
    }
}

const pessoa2 ={
    falar(){ // function apagado!
        console.log('Opa')
    }
}

pessoa.falar()
pessoa2.falar()