const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não gera erro caso não exista - gera vazio
console.log(escola.charCodeAt(3)) //gerou numero 51 devido num. cadastrado na tabela UNICODE cod html
console.log(escola.indexOf('d')) // returna numero 2 -> indice

console.log(escola.substring(1)) //imprime do indice 1 até final
console.log(escola.substring(0,3)) // imprime somente intervalo de indices informados

console.log('Escola '.concat(escola).concat("!")) // Obs String itera com a função concat ou x+y+x e tanto aspas 2 e 1
console.log(escola.replace(3,'e')) //pega o indice e substitui pelo caractere informado
console.log('Ana,Maria,Joao'.split(',')) // gera um array -> separa pelo caractere




