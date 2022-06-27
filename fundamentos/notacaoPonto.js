console.log(Math.ceil(6.1)) //arredonda pra cima

const obj1 ={}
obj1.nome ='Bola'
console.log(obj1.nome) //reorna o valor instanciado em nome do obj1

// function Obj(nome){
//     this.nome = nome //atribui o valo em nome acima no nome instanciado neste Obj
// }

function Obj(nome){
    this.nome = nome //atribui o valo em nome acima no nome instanciado neste Obj
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj1.nome)
console.log(obj2.nome)
//console.log(obj3.nome)
console.log(obj3.nome)
obj3.exec()
