//Função que verfifica se o ano é bissexto
//regras de 4 em 4 anos, de 100 em 100 não é, de 400 em 400 é

function isBissexto(x){
    if (x%400 == 0) {
        console.log(true)
    }
    else if (x%100 == 0){
        console.log(false)
    }
    else if (x%4 == 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

isBissexto(400)
isBissexto(200)
isBissexto(100)
isBissexto(40)
isBissexto(2010)
isBissexto(2024)
