
import { testimonios } from './Components/testimoniosData';
import './App.css'
import Testimonios from "./Components/Testimonios"

function App() {

  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestro alumnos sobre freeCodeCamp.</h1>
      <div className="contenedor-principal">
        {testimonios.map((testimonio, index) => (
          <Testimonios
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  )
}

export default App
