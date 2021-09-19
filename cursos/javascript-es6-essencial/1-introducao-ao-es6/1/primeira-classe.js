function getName() {
    return "Darlley Brasil de Brito Furatdo"    
}

function logFn(fn){
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName);