import Logo from './Components/Logo/Logo'
import './App.css'
import ListaTareas from './Components/ListaTareas/ListaTareas'


function App() {

  return (
    <div className="aplicacion-tareas">
      <Logo />

      <div className='tareas-lista-principal'>
        <h1>Mis Tares</h1>
        <ListaTareas />
      </div>
    </div>
  )
}

export default App
