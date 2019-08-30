import React from 'react';

const Tarjeta = props => {
    return(
        <div>
            <ul></ul>
            <h1>Tarjeta presentacion {props.name}</h1>
            <h3> {props.name}</h3>
            <h3> {props.telefono}</h3>
            <h3> {props.edad}</h3>
            <div>{props.children}</div>
        </div>
    )
}

export default Tarjeta; 