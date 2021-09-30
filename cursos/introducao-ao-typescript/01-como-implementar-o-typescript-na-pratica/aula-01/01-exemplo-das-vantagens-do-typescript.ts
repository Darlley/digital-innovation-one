/* https://www.typescriptlang.org/
 *
 * 
 * função de soma no JavaScript
 * 
 * function somar(a, b) {
 *  return a + b
 * }
 * somar(1, 2) 
 * 3
 * 
 * porém se eu executar a função e somar duas strings els serão concatenadas
 * somar("a", "b")
 * "ab"
 * 
 * Com JavaScript eu poderia fazer com que esta função excute somente com números adicionando uma condicional do typeof:
 * function somar(a, b) {
 *  if(typeof a === number && typeof b === number){
 *      return a+b
 *  }else{
 *      console.log("Informe somente valores numéricos!")
 *  }
 * }
 * 
 * O TypeScript funciona como uma extensão que adicona checagem de tipos 
 * e varias outras features que o JavaScript não disponibiliza nativanente
 */