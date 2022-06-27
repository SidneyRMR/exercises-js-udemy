//Tipo de triângulo

const prompt = require('prompt-sync')()



function isEqui(x, y, z){
    if (x == y && x == z)
        return console.log('É Equilátero')
}

function isIsoc(x, y, z){
    if ((x == y && x != z) || (x == z && x != y) || (y == z && y != x)){
        return console.log('É Isóceles')
    }
}

function isEsca(x, y, z){
    if (x != y && x != z && y != z){
        return console.log('É Escaleno')
    }
}

(function verify(){
    let setx = parseFloat(prompt('Digite o primeiro valor: '))
    let sety = parseFloat(prompt('Digite o segundo valor: '))
    let setz = parseFloat(prompt('Digite o terceiro valor: '))
    if (setx + sety >= setz || setx + setz >= sety || sety + setz >= setx){
        isEqui(setx, sety, setz)
        isIsoc(setx, sety, setz)
        isEsca(setx, sety, setz)
    } else {
        console.log('Esses valores não formam um triângulo')
    }
})()

 
