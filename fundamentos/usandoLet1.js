var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)// procura a variavel 'numero' dentro do escopo menor, caso nao tiver ele vai pro escopo maior
}
console.log('fora =', numero)
