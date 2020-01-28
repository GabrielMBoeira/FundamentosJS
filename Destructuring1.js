//Desestruturando objeto

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro:'Rua C',
        numero: 10
    }
}
//console.log(pessoa)

const {nome, idade} = pessoa // tira atributo do objeto e transforma numa variavel
console.log(nome, idade)

const{nome: n, idade: i} = pessoa // renomear atributo de objeto e transformar em variavel
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)