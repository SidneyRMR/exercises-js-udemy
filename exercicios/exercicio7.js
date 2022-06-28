//Resolução formula de Baskara


let a = 3
let b = -5
let c = -12

let delta = Math.pow(b, 2) - (4 * a * c)

if (delta < 0) {
    console.log('Delta é negativo, portando inválida o resultado da fórmula de Baskara')
} else {
    let raiz = Math.sqrt(delta)
    let x1 = (-b + raiz) / 2 * a
    let x2 = (-b - raiz) / 2 * a
    console.log(`o conjunto solução é x'=${x1} e x"=${x2}, que são pertencentes aos números reais`)
    
    let resultX1 = a * (x1**2) + b * x1 + c
    let resultX2 = a * (x2**2) + b * x2 + c

    console.log(`O resultado da equação para x' é ${resultX1}`) 
    console.log(`O resultado da equação para x" é ${resultX2}`) 
}