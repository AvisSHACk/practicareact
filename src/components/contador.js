import React, {useState} from "react";

const Contador = () => {

    const [contador, cambiarEstadoContador] = useState(0);

    const cambiarContador = (e) => {
        (e.target.textContent === 'Incrementar') ? cambiarEstadoContador(contador + 1) : cambiarEstadoContador(contador - 1)
    }
    
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={cambiarContador}>Incrementar</button>
            <button onClick={cambiarContador}>Disminuir</button>
        </div>
    )
}

export default Contador;
