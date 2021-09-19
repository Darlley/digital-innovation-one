// O JavaScript não adota por padrão o paradigma funcional mas é possivel adapater ela
// O Currying transforma multiplos parâmetros de uma função em um:

function soma(a){
     
    return function(b){
        console.log(`${a + b}`)
    }
}

const somar = soma(2)

somar(2)
somar(3)
somar(4)
somar(5)