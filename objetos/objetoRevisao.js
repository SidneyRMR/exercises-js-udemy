const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //adiciona novos elementos no objeto
produto.preco = 220

console.log(produto)

//para deletar
delete produto.preco
delete produto['marca do produo']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1100
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)

