import "./Boton.css"

function Boton({texto, esbotonClic, manejarclic}) {
    return <button
        className={esbotonClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarclic}
    >
        {texto}
    </button>
}

export default Boton;