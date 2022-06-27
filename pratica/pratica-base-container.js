

// const { time } = require("console")


// const quantosDias = function(){
//     // console.log('Digite por quantos dias que o container será alugado: ')
//     var valor = 30
//     return valor

// }

const User = {
    id: Number,
    login: String,
    senha: String,
    cpf: String
}(estaLogado = false)


const Client = {
    id: Number,
    name: String,
    cpf: String,
    endereco: String 
}( querAlugar = false)


const Container = {
    id: Number
}(estaAlugado = false)




// fazer o login
var enterUser = 'sidney'
var enterPassword = 'senha123'
if((user1.login == enterUser) && (user1.senha == enterPassword)){
    console.log('Seja bem vindo')
}



// if (user1.estaLogado == true) {

//     console.log("Faça o Login para continuar")
//     if((client1.querAlugar == true) && (container1.estaAlugado == false)){
//         dias = quantosDias()
//         let valorTotalAluguel = 10 * dias
//         container1.estaAlugado = true
//         let data = new Date()
//         let dia = String(data.getDate()).padStart(2,'0')
//         let mes = String(data.getMonth()+1).padStart(2,'0')
//         let ano = data.getFullYear()
//         console.log(`O valor do aluguel para ${dias} dias é de ${valorTotalAluguel},
// e a data para devolução é para ${dia}/${mes}/${ano}`)
//     }
// }



