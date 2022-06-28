//COntruir uma função que receba duas strings de tamanhos variados, 
//e que retorne true or false caso todos os caracteres(independente 
//se for maiusculo ou minusculo) estejam contidos em ambas as palavras

let wordsOne = 'macaca'
let wordsTwo = 'MACACA'

function allLower(){
    wordsOne = wordsOne.toLowerCase()
    wordsTwo = wordsTwo.toLowerCase()
}


function compareStrings(){
    if (wordsOne === wordsTwo){
        return true
    } else {
        return false
    }    
}

allLower()

console.log(compareStrings())