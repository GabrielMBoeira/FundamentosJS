var numero = 1 
{
    let numero = 2                      //<- let considera blocos.
    console.log('dentro = ',numero)
}
console.log('fora =', numero)  //<- let considera não há conflito nas variáveis.

//var = global, função
//let = global, função, bloco