import React, {useState} from "react";
import ReactDOM from "react-dom";
import Usuario from "./components/Usuario";
import FormularioInicioSesion from './components/formularioSesion';
import Contador from "./components/contador"

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true)


  return(
  <>
    {sesion === true ? (
      <div>
        <Usuario />
          <Contador />  
          <button onClick = {() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>
      </div>
    ) : (
      <div>
        <p>No has iniciado Sesion</p>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
          {/*<button onClick = {() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>*/}
      </div>
    )}
  </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
