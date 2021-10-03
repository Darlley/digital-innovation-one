import React from "react"
import ReactDOM from "react-dom"
import Button from "./components/Button";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import "./styles.css"

const $rootElement = document.querySelector('[data-js="root"]');

/* 

// J S X

function primeiroJSX() {
    return (
        <h1>Darlley</h1>
    )
}

function somar(a, b) {
    return a + b;
}

const App = () => {
    return (
        <div className="titulo">
            {primeiroJSX()}

            <div><p>SOMAR: 2+3 = {somar(2, 3)}</p>
            </div>
        </div>
    )
}

// R E N D E R

const element = 'Darlley Brasil de Brito Furtado';
const element2 = <h1>Nome</h1>

const App = () => {
    return (
        <div>
            {element2}
            <p>{element}</p>
        </div>
    )
}

// C O M P O N E N T S
*/


// function App() {}
function somar(a, b){
    alert(`${a} + ${b} = ${a+b}`);
}
const App = () => {
    return (
        <div>
            <Button onClick={() => somar(1,3)} name="Darlley" />
            <ComponentA />
            <ComponentB />
            <ComponentC />

            <ComponentA>
                <ComponentB>
                    <ComponentC>
                        <Button onClick={() => somar(5,5)} name="Brasil" />
                    </ComponentC>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

ReactDOM.render(<App />, $rootElement)