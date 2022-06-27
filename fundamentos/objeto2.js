console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente) //Função
console.log(typeof new Cliente) //Objeto

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //Função
console.log(typeof new Produto()) //Objeto