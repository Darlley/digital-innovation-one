let order = []
let clickedOrder = []
let score = 0;

/* 
 * 0 - verde
 * 1 - vermelho
 * 2 - amarelo
 * 3 - azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);

    }
}

let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            element.classList.remove('selected');
        }, 500)
    }, 1250);
    
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} você acertou, novo nível!`)
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}

let createColorElement = (color) => {
    if(color==0){
        return green
    }else if(color==1){
        return red
    }else if(color==2){
        return yellow
    }else if(color==3){
        return blue
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder()
}

// game over
let lose = () => {
    alert(`Pontos: ${score} - Você perdeu!`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert(`Bem vindo ao Genesis!`)
    score = 0

    nextLevel()
}

/*
green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))
*/

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()