const notas = [6.7, 7.8, 8.7, 5.8, 3.5, 4.7]

for(let i in notas){ // neste caso o i é o indice do array (i = indice 0) (i = indice 1)etc...
    console.log(i, notas[i]) 
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: 15,
    peso: 45
}

for(let atributo in pessoa){ // in percorre o indice ou a tributos
    console.log(` ${atributo} = ${pessoa[atributo]}`)
}
