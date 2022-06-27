{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // a variavel var pode ser visivel dentro e fora dos blocos(escopos)

function teste(){
    var local = 123
    console.log(local)
}
teste()

console.log(local) //A variavel 'local' nao pode ser visivel fora do escopo da função

//Devemos evitar criar variaveis no escopo global pois ela corre o risco de ser alterada erroneamente

