//cadeia de  prototipos(prototype chain)
Object.prototype.attr0 = '0' // não se deve fazer uso disso 

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3:'3'}
const filho = {__proto__: pai, attr3: 'C'} // neste casso o attr3 sobreia o attr3 de pai, pois ele procusra sempre primeiro no primeiro escopo
console.log() //sobe e encontra no avo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro ={
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velmax: 323 //shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //neste momento é estabelecido a relação da ferrari com carro
Object.setPrototypeOf(volvo, carro)


//Testes
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())