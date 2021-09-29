/*
O bloco try catch permite a execução do rstante do código mesmo após um erro que por padrão para a execução do fluxo do código na linha exta do erro
*/
console.log("Antes do erro")
try{
    console.log(nome)
    const nome = Darlley;
}catch(err){
    console.log(err)
}
console.log("Depois do erro")