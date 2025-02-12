
import React from "react"
import './App.css'
import freCodeCampLogo from "./assets/freecodecamp-logo.png";
import Boton from "./Components/Boton/Boton";
import Contador from "./Components/Contador/contador";
import { useState } from "react";

function App() {

  const [numClics, setNumclis] = useState(0)

  const manejarclic = () => {
    setNumclis(numClics + 1);
    
  };
  const reiniciarContador = () => {
    setNumclis(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='frecodecamp-logo'
          src={freCodeCampLogo}
          alt="logo frecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador
          numClics={ numClics}
        />
        <Boton
          texto="Clic"
          esbotonClic={true}
          manejarclic={manejarclic}
        />
        <Boton
          texto="Reiniciar"
          esbotonClic={false}
          manejarclic={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
