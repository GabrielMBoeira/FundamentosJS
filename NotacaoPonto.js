console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Gabriel'
// obj1['nome'] = 'Gabriel'    => Mesma coisa que obj1.nome = 'Gabriel' -> acessando como array ou ponto
console.log(obj1)

function obj(nome){
    this.nome = nome // this deixa o atributo do objeto visivel - publico
    this.exec = function (){
        console.log('exec....')
    }
}

const obj2 = new obj('cadeira') 
console.log(obj2.nome) // usando atributo nome.. do Objeto em outro Objeto

const obj3 = new obj('teste') //acessando uma funcao - dentro de outra (funcao publica)
obj3.exec()



