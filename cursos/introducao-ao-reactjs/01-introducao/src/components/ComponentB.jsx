import React from 'react';

const ComponentB = (props) => {
    
    return (
        <div className="componentB">
            Componente B =D

            <div>{props.children}</div>
        </div>
    )
}

export default ComponentB;