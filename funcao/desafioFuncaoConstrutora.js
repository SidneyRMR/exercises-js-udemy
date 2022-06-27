class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()


/////////////////////////////////


function Pessoa2(nome2){
    this.nome2 = nome2

    this.falar = function(){
        console.log(`Meu nome é ${this.nome2}`)
    }
}

const p2 = new Pessoa2('Maria')
p2.falar()