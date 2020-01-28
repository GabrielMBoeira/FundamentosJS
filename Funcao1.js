//Função sem retorno

function imprimeSoma(a, b){
console.log(a+b)
}

imprimeSoma(2,3) // retorna 5
imprimeSoma(2) // retorna Nan = pois b é undefined => inteiro + undefined
imprimeSoma(2,3,4,5,6,7) // retorna 5 => pega os 2 primeiros, o restante ele ignora
imprimeSoma() // retorna Nan = somando undefined

//Função com retorno-------------------------------------------------

function soma(a, b = 1){
    return a + b
}
console.log(soma(10, 7))
console.log(soma(1))