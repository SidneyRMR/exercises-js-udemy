// pessoa -> 123 -.{...}
const pessoa = { nome: 'Joao'}
console.log(pessoa)

pessoa.nome = 'Pedro' // dessa forma eu altero o valor do node de joao para pedro
console.log(pessoa)

//pessoa -> 456 -> {...} //tenta atribuir a outro endereco de memoria
//pessoa = {nome: 'Anna'} // por pessoa ter sido declarada como constrante, não é possivel alterar dessa forma
//console.log(pessoa)//gera problema

Object.freeze(pessoa)//congela o objeto para nao deixar mais alterar o objeto
pessoa.nome = 'Maria'// ou seja, o freeze congela o objeto e seus atributos, não podendo mais alterá-lo
console.log(pessoa)
console.log(pessoa.nome)