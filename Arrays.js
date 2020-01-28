const valores = [7.8, 4.6, 3.5, 5.7]
console.log(valores[0], valores[3])
console.log(valores[6]) //Não termina em erro -> termina undefined

valores [4] = 8
console.log(valores) // Arrays em JS acrescenta posições não tem nº de posições fixa

console.log(valores.length) // retorna 5 -> tamanho do array

valores [10] = 30
console.log(valores) // [ 7.8, 4.6, 3.5, 5.7, 8, <5 empty items>, 30 ]

valores.push(7.7, {id:3}, null, false,'teste' ) // aceita diversos types (tipos)
console.log(valores)

console.log(' ')

console.log(valores.pop()) //retira do array o ultimo valor

delete valores[0]
console.log(valores) //deleta valor do indice 0 

console.log(typeof valores) // é o tipo Object

