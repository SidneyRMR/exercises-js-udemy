/*Escrever algoritmo que leia o cod do aluno e sua 3 notas
 *Calcular a media ponderada, considerando 4 para a prova q recebeu a maior nota
 *e 3 para as duas de menor nota. Retornar o codigo do aluno, as 3 notas, a media calculada,
 *e aprovado caso nota for maior ou igual a 5, e reprovado caso seja menor q 5.
 *Repetir operação até que o codigo lido seja negativo 
*/

const prompt = require('prompt-sync')()

let cod = Number
cod = prompt('Digite o código do aluno: ')


while (cod > 0){

    if (cod > 0){

        //Neste bloco sera soliciado a nota 3x e caso ela for maior que 10 ou menor 1 0
        let notas = []
        for (let i = 1; i <= 3; i++){
            let aux = Number(prompt(`Digite a nota ${i} do aluno: `))

            if ((aux > 10) || aux < 0){
                console.log('Insira uma nota entre 0 e 10')
                i--
            } else {
                notas.push(aux)
            }
        }
        
        //Neste bloco as notas são ordenadas em ordem crescente
        //É atribuido o peso às notas e calculado a media ponderada
        notas.sort((a, b) => a - b).reverse()
        let pesoNotas = []
        pesoNotas.push(notas[0] * 0.4)
        pesoNotas.push(notas[1] * 0.3)
        pesoNotas.push(notas[2] * 0.3)
        let mediaPond = (pesoNotas[0] + pesoNotas[1] + pesoNotas[2])

        //Verifica se aluno foi aprovado ou reprovado
        if (mediaPond >= 5){
            situacaoAluno = 'APROVADO!'
        } else if (mediaPond < 5){
            situacaoAluno = 'REPROVADO!'
        }

        //Mostra as informações das notas e a situação do aluno ao usuário
        console.log(`\nO aluno de código ${cod} recebeu:
    Nota 1 - ${notas[0]} com peso de ${pesoNotas[0]},
    Nota 2 - ${notas[1]} com peso de ${pesoNotas[1]},
    Nota 3 - ${notas[2]} com peso de ${pesoNotas[2]},
    E a média ponderada foi de ${mediaPond},
    Portando o aluno está ${situacaoAluno}\n`)
        

    cod = prompt('Digite o código do aluno: ')
    }
    
}