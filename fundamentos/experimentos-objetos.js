let a =3 // local

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//variavel maluca
abc = 3 //não faça isso pois ela é atribuida globalmente e pode gerar graves problemas no seu codigo
console.log(global.abc)// sempre coloque var let , const var
//sempre é mais seguro atribuir variaveis dentro de objetos, buscar sempre fazer isso