import "./Logo.css"
import freCodeCampLogo from "/src/assets/freecodecamp-logo.png";

function Logo() {
    return <div className="freecodecamp-logo-contenedor">
        <img
            className="frecodecamp-logo"
            src={freCodeCampLogo}
            alt="logo frecodecamp" />
    </div>
}

export default Logo;