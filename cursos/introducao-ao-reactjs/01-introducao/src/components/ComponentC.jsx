import React from 'react';

const ComponentC = (props) => {
    
    return (
        <div className="componentC">
            Componente C =D

            <div>{props.children}</div>
        </div>
    )
}

export default ComponentC;