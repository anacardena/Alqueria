import React from 'react'
import '../utils/css/recoleccion.css'
import '../utils/css/estilosglobales.css'
import logo from '../utils/images/logoalquería.jpg'
import {Link} from "react-router-dom"
function Recoleccion () {
    return (
    	<div id="contenedor_padre">
    	 <div id="banner" style={{backgroundImage:`url(${logo})`}}> </div>
    	 <h1> aquí se tiene el listado de las gransjas y se registrarán las leches </h1>
        <div id="boton">
              <Link to="/" class="btn">
             <span>atrás</span>
             </Link>
             <Link to="/Controlrecoleccion" class="btn">
             <span>Controlrecoleccion</span>
             </Link>
	    </div>
	    </div>
    )

}

export default Recoleccion