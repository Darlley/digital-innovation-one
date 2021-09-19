function init(){
    const exemplo = "primeiro init"

    return function() {
        console.log(`1 - O valor da variável é: ${exemplo}`)
        
        return function() {
            console.log(`2 - O valor da variável é: ${exemplo}`)
            
            return function() {
                console.log(`3 - O valor da variável é: ${exemplo}`)
            }
        }
    }
}
const initial = init()()();
initial()