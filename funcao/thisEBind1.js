const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // gera conflito entre paradigmas: funcionao e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind é responsável por amarrar o objeto à variável
falarDePessoa()