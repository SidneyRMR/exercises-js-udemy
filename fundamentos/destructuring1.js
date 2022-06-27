//recurso introduzido no ES2015
const print = x => console.log(x)
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        cep: 13807516
    }
}

print(pessoa.nome)

const { nome, idade } = pessoa//chaves representam oeradores de desestruturação
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Atribui a n e i os valores que foram retirados(desestruturados) do conjunto chave/valor
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)