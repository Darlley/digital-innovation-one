/* funções tradicionais
 *  
 * function nome(argumentos){
 *     console.log(valor)
 * }
 * execucao da funcao: nome()
 * 
 * além das funções anonimas que são armazenas em variaveis ou atribuidas como parametro 
 * para outras funções (funções de primeira classe)
 * 
 * e podemos retornar os valores com a palavra "return"
 *
 */

/* A R R O W  F U N C T I O N
 * São funções anonimas e também podemos omitir a palavra "function" e, caso só tenha um retorno simples, as chaves {} e 
 * a palavra "return"
 *
 * let somar = a => {
 *      code ...
 *      return code
 * }
 */

let somar = (a, b=1) => a+b;
console.log(somar(2))
console.log(somar(2, 2))

/* objetos literais 
 * let obj = {
 *     propriedade: valor
 * }
 * 
 * retorno implicito de um objeto (é necessário os parenteses):
 * let objeto = () => ({
 *      propriedade: valor
 * })
 *
 * funções construtoras:
 * function Car(){
 *      this.foo = 'bar' 
 * }
 * new Car();
 * 
 * não é possivel realizar funções construtoras com o Arrow Function por que ela não usa o "this
 * funções tradicionais são imfluenciadas pelo hoisting mas isto não ocorre com as Arrow Function
 * 
 * as funções no JavaScript tem o contexto de invocação (o this é o pai)
 */
