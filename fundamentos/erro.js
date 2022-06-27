function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}   

function imprimirNomeGritado(obj) {
 
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e) // evitar jogar as mensagens muito tecnicas ecom informações demais de erro para o usuario
    } finally {
        console.log('final')
    }
    
}

const obj = { name: 'Roberto'} //mudar nome paa name e veriicar o erro que da
imprimirNomeGritado(obj)