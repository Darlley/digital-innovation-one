const partes = ['ombro', 'joelhos']
const partes2 = ['cabeca', ...partes, 'pés']

console.log("Partes: ", partes)
console.log("Partes 2: ", partes2)

// arrays = [0,1,2]
// function arg(a,b,c)
// arg(...arrays)

let arr = [3,5,7]
arr.foo = "hello"

for (let i in arr){
    console.log("For In: ", i) // indice
}

for (let i of arr){
    console.log("For Of: ", i) // valor
}