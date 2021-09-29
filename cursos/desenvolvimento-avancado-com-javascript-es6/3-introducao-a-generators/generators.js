// G E N E R A T O R são funções com pausas que retornam valores

function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const yi = yield;
    console.log(yi)
    console.log('Function');
}

const generatorFunction = hello()
console.log(generatorFunction.next())
console.log(generatorFunction.next())
console.log(generatorFunction.next('Outside'))