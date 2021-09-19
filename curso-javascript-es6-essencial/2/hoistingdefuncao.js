// Comportamento de usar variaveis antes dela ser declarada, motivo para ser criado o let e o const
// Existe hoisting (eleva a criação de variavel, não a atribuiçã) de variáveis e funções (é içado ou elevado como um todo) 

function fn(){
    /*
     * function log(value){
     *    console.log(value)
     * }
     *
     * a função inteira é içada 
     */

    log('Hoisting de função')

    function log(value){
        console.log(value)
    }
}

fn()