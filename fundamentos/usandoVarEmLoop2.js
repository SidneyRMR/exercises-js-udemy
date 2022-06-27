var funcs =[]

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //imprime 10
funcs[8]() //imprime 10 tbm
