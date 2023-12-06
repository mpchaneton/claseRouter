import React from "react";
import { Link } from "react-router-dom";


function Inicio() {
    return (
        <div>

            <h1>Esta es la página de inicio</h1>

            <Link to="contacto">Haz click para ir a contacto</Link>

        </div>
    );

}

export default Inicio;