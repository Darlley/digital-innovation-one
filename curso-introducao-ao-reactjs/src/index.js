import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX() {
    return (
        <div className="titulo">
            Darlley Brito - Introdução ao React JS
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.querySelector('#root')
ReactDOM.render(<App />, rootElement)