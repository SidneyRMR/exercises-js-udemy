let a = 7;
let b = 94;

//desafio de trocar os valores .. a = 94 e b = 7.

console.log("Valores dados: " +a+ " e " +b);

//minha solução
let temp;
temp = a;
a = b;
b = temp;

console.log("Solução minha: " +a+ " e " +b);


// Solução do professor
[a, b] = [b, a];
console.log("Solução do professor: " +a+ " e " +b);

