//Usando notação literal
// não confudir com JSON
const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Em teoria os dois são pra ser iguais
console.log(obj1 == obj2)

//Funções contrutoras
function Produto(nome, preco, desconto){
    this.nome = nome //quando coloco this significa que estou tornando o nome publico
    this.getPrecoDesconto = () =>{
        return preco * (1 - desconto) //ele retorna o resultado e perceba que os objetos preco e desc estao incapsulados, ou seja estao indisponiveis a serem usados fora da função
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15) // Nestes casos os valores se toram disponíveis
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função que retorna Objetos...
const fromJSOM = JSON.parse({'info': 'Sou um JSON}'})
console.log(fromJSON.info)