// A R R A Y S

let frutas = ['Banana', 'Maça', 'Melancia']

// var banana = frutas[0]
// var maca = frutas[1]
// var melancia = frutas[2]

let [banana, maca, melancia] = frutas 
console.log(`${typeof frutas}: ${banana, maca, melancia}`)

// O B J E T O S

let pessoas = {
    nome: 'Darlley',
    props: {
        age: 23,
        colors: ["blue", "red"]
    }
}

// var nome = pessoas.nome

let {nome: darlley} = pessoas
let {props: {age}} = pessoas
let {colors: [color1, color2]} = pessoas.props

console.log(`${typeof pessoas}: ${darlley}`)
console.log(`${typeof pessoas.props}: ${age}`)
console.log(`${typeof pessoas}: ${color1}, ${color2}`)

// F U N Ç Õ E S

let arr = [5,5,2,3]
function somar([a, b]){
    console.log("Soma em Array: " + (a + b));
}
somar(arr)

function sum({ a, b }){
    return a + b
}
console.log("Soma em Objeto: " + sum({a: 5, b: 5}))