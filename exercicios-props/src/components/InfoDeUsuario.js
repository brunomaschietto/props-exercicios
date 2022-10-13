import React from "react";

export function InfosUsuario (props) {
    return (
        <div>
            <img src={props.info1.logo} width="100px"/>
            <p>Autor: {props.info1.autor}</p>
        </div>
    )
}