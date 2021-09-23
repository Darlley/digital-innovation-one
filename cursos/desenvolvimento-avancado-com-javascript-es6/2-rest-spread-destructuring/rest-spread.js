// R E S T é multiplos argumentos (numero indefinido)


// Os arguments era a forma genérica de lidar com multiplos argumentos
// mas que teria que ser percorrida com uma estrutura de repetição

function sum(...args){
    return args.reduce( function(acumulador, value) {
            return acumulador + value
    })
}
console.log(sum(5,6,2,3))

// no ES6 foi introduzido o rest operator: ...

const soma = (a, b, ...rest) => console.log(a, b, rest)
soma(1, 2, 3, 4)