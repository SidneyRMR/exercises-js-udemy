//Faça uma função que receba como parametro um vetor de notas e mostre os conceitos de cada uma 
//demodo que de 0,0 a 4,9, seja atribuido como conceito D, de 5,0 a 6,9, seja atribuido conceito C
//de 7,0 a 8,9 seja conceito B e 9,0 a 10,0, conceito A.

let notas = [5.2, 8.9, 9.5, 2.3, 6.7, 7.6, 4.5, -1.3]


function verfNotas(x){
    for (i in x){
        if ((x[i] > 0.0) && (x[i] <=4.9)){
            console.log(`A nota ${x[i]} recebe o conceito D`)

        } else if ((x[i] > 5.0) && (x[i] <=6.9)){
            console.log(`A nota ${x[i]} recebe o conceito C`)

        } else if ((x[i] > 7.0) && (x[i] <=8.9)){
            console.log(`A nota ${x[i]} recebe o conceito B`)

        } else if ((x[i] > 9.0) && (x[i] <=10.0)){
            console.log(`A nota ${x[i]} recebe o conceito A`)

        } else {
            console.log('Nota Inválida!')
        }
    }
} 

verfNotas(notas)