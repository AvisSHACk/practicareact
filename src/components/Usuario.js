import React from "react";
import { Titulo } from "./titulo.js";

const Usuario = () => {
  const amigos = ["Alejandro", "Manuel", "Cesar"];
  const pais = "Perú";
  return (
    <div>
      <Titulo />
      <Titulo usuario="Manuel" color="purple" />
      <p>Que tengas un buen dia</p>
      {pais && <p>Tú eres de: {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
          {amigos}
      </ul>
    </div>
  );
};

export default Usuario;
