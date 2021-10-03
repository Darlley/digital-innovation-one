import React, { Children } from 'react';

const ComponentA = (props) => {
    
    return (
        <div className="componentA">
            Componente A =D

            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;