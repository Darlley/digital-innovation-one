import { useState } from 'react';
import Button from "../Button";


const Card = () => {
    const [valor, setValor] = useState(0);

    function calcular(event){
        const success = event.target.classList.contains('btn-success')
        success ? setValor(valor + 1) : setValor(valor - 1);
    }

    return (
        <div className="card bg-dark text-light">
            <div className="card-header">Curso de ReactJS</div>
            <div className="card-body">
                <h5 className="card-title">TODO LIST</h5>
                <p className="card-text">Descrição do componente.</p>
                <Button onClick={calcular} className="btn btn-success">Adicionar</Button>
                <Button onClick={calcular} className="btn btn-danger">Remover</Button>
                <span>{valor}</span>
            </div>
        </div>
    )
}

export default Card;