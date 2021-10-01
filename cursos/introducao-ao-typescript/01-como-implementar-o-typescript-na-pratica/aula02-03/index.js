/*

function somar(a: number, b: number){
    return a + b;
}

somar(1, 3)

somar('a','b')
ERROR
index.ts(1,30): error TS2304: Cannot find name 'nunber'.
index.ts(4,7): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.


Interfaces são utilizadas para definir contratos (estruturas de dados, banco de dados, classes)

interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    correr(tempo: number): void
}

Types são utilizados para juntar diferentes interfaces e difinir variaveis como interfaces
type IAnimal = {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    correr(tempo: number): void
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    correr: (tempo) => (`O animal correu por ${tempo} km`)
}
animal.correr(2)

const gato: IFelinos = {
    nome: 'Gato',
    tipo: 'terrestre',
    correr: (tempo) => (`O animal correu por ${tempo} km`),
    visaoNoturna: true
}
gato.correr(1)


aula 5 - como funciona o type

type IAnimal = {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    domestico: boolean
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'pequeno',
    tipo: 'terrestre'
}*/
var input = window.document.querySelector('[data-js="input"]');
input.addEventListener('input', function (event) {
    var i = (event.currentTarget);
    console.log(i.value);
});
