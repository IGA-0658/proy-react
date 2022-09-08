import React from 'react';

function Listado(props) {
return (
    <ol>
        {props.coleccion.map((c,i) => <li key={i}>{c}</li>)}
    </ol>
);
}

export default Listado;

