var funcs =[]

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //imprime 2 pq usamos let como definição da variavel
funcs[8]() //imprime 8 tbm
