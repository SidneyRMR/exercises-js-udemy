/*
 *Criar função que calcule o valor a ser pago de anuidade de uma associação.
 *A função deve receber como parametro um inteiro que representa o mês. ex. 1 - Jan, 2 - Fev
 *que foi paga a anuidade, Deve ser cobrado por mes de atraso 5% de juros em regime de juros compostos
 *A função deve retornar o valor a ser pago para o respectivo mes de pagamento escolhido
*/


//This values represents the months, they are between 1 for january and 12 for december.
let mes = [10.6, 2, 12, 5, 1, 6, 10, 2.3, 0, 15]

function calcularAnuidade(meses){
    for (i in meses) {

        if ((meses[i] > 0) && (meses[i] < 13)){

            if (Number.isInteger(meses[i])) {

                    //Calcular o valor da anuidade de acordo com o mes de pagamento, sendo q vence em janeiro
                    //Considerar valor da anuidade de 250 reais
                    valAnuidade = 250 *(1 + 0.05)**(meses[i]-1)
                    console.log(`O valor a ser pago da anuidade é de R$${valAnuidade.toFixed(2)}`)

            } else {
                console.log('Digite um valor inteiro de 1 a 12')}

        } else {
            console.log('Digite um mês válido')
        }
    }
}

calcularAnuidade(mes)