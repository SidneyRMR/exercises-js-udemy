function Pessoa(){
    this.idade = 0

    setInterval(() => { // Neste caso como usamos uma funcao arrow(=>) o this nao varia de objeto, se mantem referenciado ao objeto imediato
        this.idade++     //nao sendo necessario chamar a funcao bind e nem criar o self
        console.log(this.idade)
    }, 1000);
}

new Pessoa