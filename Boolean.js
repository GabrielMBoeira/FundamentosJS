let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // numero 1 representa verdadeiro (!! = não não  ->e Transforma algo para boolean)

console.log('')

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1) // nuneros inteiros são true (exceto 0)
console.log(!!'texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('')

console.log('Os falsos...')
console.log(!!0)
console.log(!!null) // nulo é falso
console.log(!!'')//String vazia é falso
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('')


console.log('Para finalizar....')

console.log(!!('' ||null||0||'epa')) // usando expressão (||== ou)retorna primeira expressão verdadeira tirando !!

let nome = ''
console.log(nome||'Desconhecido') // imprime Desconhecido pq nome deu falso

nome = 'Lucas'
console.log(nome ||'Desconhecido') // imprime Lucas -> pega primeiro verdadeiro




