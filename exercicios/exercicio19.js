/* Criar função que receba o codigo do produto pedido e a quantidade
 * e calcule o valor a ser pago por aquele lanche, cada execução só calculará 
 * um item. Usar comando switch, setar default para produto não existente
*/

const prompt = require('prompt-sync')()

const prod1 = {
    codigo: 100,
    descricao: 'Cachorro(s) Quente(s)',
    preco: 3.00
}
const prod2 = {
    codigo: 200,
    descricao: 'Hambúrguer(es) Simples',
    preco: 4.00
}
const prod3 = {
    codigo: 300,
    descricao: 'Cheeseburguer(es)',
    preco: 5.50
}
const prod4 = {
    codigo: 400,
    descricao: 'Bauru(s)',
    preco: 7.50
}
const prod5 = {
    codigo: 500,
    descricao: 'Refrigerante(s)',
    preco: 3.50
}
const prod6 = {
    codigo: 600,
    descricao: 'Suco(s)',
    preco: 2.80
}


function lerProduto(){
    let codProduto = Number(prompt("Digite o código do produto: "))
    let qndeProdutos = Number(prompt("Digite a quantidade do produto: "))
    switch(codProduto){
        case 100:
            precoTotal = prod1.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod1.descricao} dando um total de R$${precoTotal} à pagar.`)
            break
        case 200:
            precoTotal = prod2.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod2.descricao} dando um total de R$${precoTotal} à pagar.`)
            break
        case 300:
            precoTotal = prod3.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod3.descricao} dando um total de R$${precoTotal} à pagar.`)
            break
        case 400:
            precoTotal = prod4.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod4.descricao} dando um total de R$${precoTotal} à pagar.`)
            break
        case 500:
            precoTotal = prod5.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod5.descricao} dando um total de R$${precoTotal} à pagar.`)
            break
        case 600:
            precoTotal = prod6.preco * qndeProdutos
            console.log(`Foram consumidos ${qndeProdutos} ${prod6.descricao} dando um total de R$${precoTotal.toFixed(2)} à pagar.`)
            break
        default:
            console.log('Código de produto não encontrado!')
        }
}


lerProduto()
   

