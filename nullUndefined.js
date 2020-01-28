let valor
console.log(valor) // undefined = não foi inicializada variável

valor = null
console.log(valor) // ausència de valor-> valor nulo

//console.log(valor.toString()) // erro: TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // produto está inicializado, o que não está inicializado é o preco
console.log(produto) // return {}

produto.preco = undefined // evite assim, linguagem já vem assim
console.log(!!produto.preco) // preço indefinido, return false
//delete produto.preco ==> return vazio {}
console.log(produto)

produto.preco = null //produto com preço zero
console.log(!!produto.preco)
console.log(produto)






