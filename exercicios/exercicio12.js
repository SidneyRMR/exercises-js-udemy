//Criar função que retorne valor fatorial de um numero
//Fatorial é um número que é a multiplicação de todos seus antecessores do número dado.
//Ex. fatorial de 5 = 5! = 5*4*3*2*1 = 120, ou seja o fatorial de 5 é 120

function fatorial(x){
    let armaz = 1
    i = x
    while (i > 0){
        armaz = armaz * i
        i--
    }console.log(`A fatoração de ${x} é ${armaz}`)
}

fatorial(5)