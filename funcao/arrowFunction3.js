let comparaComThis = function(param){
    console.log(this === param) //cuidado ao usar dessa forma pois seta a variavel no escopo global
}
comparaComThis(global) 

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) //neste caso ira apontar ao objeto e nao a ao escopo global

let comparaComThisArrow = param => console.log(this === param) //neste caso nao aponta pro global pois usampos uma função arrow
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //busca dentro do contexto do obj, retornando true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //nao muda, a arrow function é mais forte portanto o resultado continua apontando para o escopo local

//resumo, quando trabalhamos com função normal, o this pode variar de escopo, mas se utilizarmos uma arrowfunction(=>) no this é setado somente para o objeto imediato
