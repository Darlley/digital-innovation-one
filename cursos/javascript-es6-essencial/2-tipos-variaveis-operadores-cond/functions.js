
(() => {
    function fn(){
        return 'Code here' 
    }
    
    const arrowFn = () => 'Code here' 
    console.log(arrowFn())
    
    fn.prop = 'propriedade prop'
    console.log(fn, fn.prop)
    
    const logValue = value => console.log(value)
    const logFnResult = fnParam => console.log("funcao como param", fnParam())
    
    logFnResult(fn)
    
    const controlFnExec = fnParam => allowed => {
        if(allowed){
            fnParam()
        }
    }
    
    const handleFnExecution = controlFnExec(fn)
    
    handleFnExecution(true)
    handleFnExecution()


    this.name = "nome no contexto de criação"
    const getNameArrowFn = () => this.name
    
    function getName(){
        return this.name
    }

    const user = {
        name: 'nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn())
    console.log(user.getName())
})()

/* 
 * Array.isArray() verifica se é array
 * .filter(item => condicao) retorna todos ou alguns
 * .map(item => { code return code} retorna um novo array
 * .reduce((arguments) => {code return code}, inicio) retorn outro array e novo tipo
 * podemos criar uma cadeia de execução com cada:
 */

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: "M"
    },
    {
        name: 'Pedro',
        age: 43,
        gender: "M"
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: "F"
    }
]

const totalEvenAges = persons
    .filter(person => person.age % 2 ==0) // todos pares
    .reduce((age, person) => { 
        age  += person.age;
        return age;
    }, 0) // percorrer e somar

console.log(`Soma total par: ${totalEvenAges}`)