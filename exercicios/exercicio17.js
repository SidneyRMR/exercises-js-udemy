/* Calculo do aumento do funcionario de acordo com os valores abaixo
 * caso plano a - aumento de 10%
 * caso plano b - aumento de 15%
 * caso plano c - aumento de 20%
*/

const prompt = require('prompt-sync')()

let plan = prompt("Escolha o plano de trabalho: ");
let wage = Number(prompt('Digite o salário do funcionario: '))

switch(plan){
    case 'a':
        wageAdd = wage * 1.1
        console.log(`O salário deste funcionário será atualizado para ${wageAdd.toFixed(2)} reais`)
        break
    case 'b':
        wageAdd = wage * 1.15
        console.log(`O salário deste funcionário será atualizado para ${wageAdd.toFixed(2)} reais`)
        break
    case 'c':
        wageAdd = wage * 1.2
        console.log(`O salário deste funcionário será atualizado para ${wageAdd.toFixed(2)} reais`)
        break
    default:
        console.log('Escolha um plano de trabalho válido!')
}