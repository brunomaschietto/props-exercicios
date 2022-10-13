import React from "react";
import { InfosUsuario } from "./InfoDeUsuario";

const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.card.imagem} alt="" />
        <h4>{props.card.tituloDoVideo}</h4>
        <InfosUsuario info1= {props.info}/>
      </div>
    </div>
  );
}
