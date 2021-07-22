import React from 'react'
import '../utils/css/recoleccion.css'
import '../utils/css/estilosglobales.css'
import logo from '../utils/images/logoalquería.jpg'
import {Link} from "react-router-dom"
import atras from "../utils/images/icons8-volver-50.png"
import buscar from "../utils/images/icons8-búsqueda-24.png"
function Recoleccion () {
    return (
    	<div id="contenedor_padre">

    	 <div id="banner" style={{backgroundImage:`url(${logo})`}}> </div>
    	  <div id="boton">
              <Link to="/" class="btn">
             <span><img src={atras} /></span>
             </Link>
            
	    </div>
    	 <h1> aquí se tiene el listado de las gransjas y se registrarán las leches </h1>
    	 <form>
    	  <input type="text" id="searchterm" placeholder="digite el nombre de la granja" />
          <button type="button" id="search"><img src={buscar} /></button>
    	 </form>
        <div className="granjas">
             <Link to="/Controlrecoleccion" class="btn">
             <span>Controlrecoleccion</span>
             </Link>
             </div>
	    </div>
    )

}

export default Recoleccion