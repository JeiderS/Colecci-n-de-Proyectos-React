import "./Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    
    return (
        <div className={ completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}
            >
                <AiOutlineCloseCircle
                    onClick={() => eliminarTarea(id)}
                    className="tarea-icono" />
            </div>
        </div>
    )
}

export default Tarea;