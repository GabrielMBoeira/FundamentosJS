//Armazenando função dentro de uma variável

const imprimeSoma = function(a, b){
    console.log(a + b)
}
imprimeSoma(3, 3)


//Armazenando função arrow
const soma = (a, b) =>{
    return a + b
}
console.log(soma(4, 4))


//retorno implícito com arrow function
const tot = (a, b) => a-b
console.log(tot(4, 4))


const imprimir2 = a => console.log(a)
imprimir2('legal')