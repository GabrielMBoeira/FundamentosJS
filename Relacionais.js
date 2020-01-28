console.log('teste 1', '1'== 1)
console.log('teste 2', '1'=== 1)
console.log('teste 3', '3'!= 3)
console.log('teste 4', '3'!== 3)

console.log('teste 5', 3 < 2)
console.log('teste 6', 3 > 2)
console.log('teste 7', 3 <= 2)
console.log('teste 8', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('teste 9', d1 === d2) // não é igual pois endereço de memória é diferente 
console.log('teste 10', d1 == d2) // não é igual pois endereço de memória é diferente 
console.log('teste 11', d1.getTime === d1.getTime)// é igual pois está comparando somente o getTime, mesmo memoria ser diferentes

console.log('teste 12', undefined == null)
console.log('teste 12', undefined === null)





