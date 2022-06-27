
    //Validar
    function validar(){
        let usuario = document.getElementById("usuario")
        let senha = document.getElementById("senha")

        //ver como fazer isso de maneira segura, comparando os dados no banco de dados
        user1 =  {
            login: 'sidney',
            senha: 'senha123'
        }

        if ((login.value == "") || (login.value != user1.login)) {
            alert("Dados incorretos")
            // Deixa o input com o focus
            login.focus()
            // retorna a função e não olha as outras linhas
            return
        }
        if ((senha.value == "") || (senha.value != user1.senha)) {
            alert("Dados incorretos")
            senha.focus()
            return
        }
        alert("Seja bem vindo!")
        
        window.location.href = "tela-inicial.html"
    }
