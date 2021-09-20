/*
 * Herança
 * Classes
 * Modificadores de acesso
 * Encapsulamento
 * Static
 */


// H E R A N Ç A é paseado em protótipos (prototype): __proto__ (constructor)
// toda variavel tem uma referência __proto__ que aponta para o prototype do tipo criado (um constructor)
//var nome = "Darlley" / nome.split()
// toda variável tem uma referência __proto___ por que os valores são criados com uma função construtora que tem um prototype que tem os métodos coomo o split()  
// O split que usamos é carregada no prototype da função construtora String()
const nome = String('Darlley')
console.log(nome.split === nome.__proto__.split)
console.log(nome.__proto__.split === String.prototype.split)
console.log(nome.constructor === String)

/*
 * o __proto__ aponta para um -> prototype e este é criado a partir de um constructor de uma função construtora (String())
 */

function pessoa(name){
    this.name = name;
    return {
        name: "Teste"
    }
}
const p = new pessoa("Darlley") // "Teste"

// Posso mudar/sobrescrever a implementação de métodos pelo prototype da função construtora (o que não é recomendavel)
String.prototype.split = function () {
    console.log("alterou")
}
"1,2,3,4,5,6".split("") // "alterou"


// C L A S S E S é uma simplificação da herança de protótipos utilizado com a palavra reservada "class"
class Animal {
    constructor(quantidadePatas){
        this.quantidadePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(true)
console.log(pug)