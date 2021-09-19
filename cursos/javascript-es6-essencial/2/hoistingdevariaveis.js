// Comportamento de usar variaveis antes dela ser declarada, motivo para ser criado o let e o const
// Existe hoisting (eleva a criação de variavel, não a atribuiçã) de variáveis e funções (é içado ou elevado como um todo) 

function fn(){
    /*
     * var text; (undefined)
     *
     * a declaração da variável é içada ao topo
     */
    
    console.log(text) 
    
    var text = "Exemplo"

    console.log(text) //var text = "Exemplo";

}

fn()