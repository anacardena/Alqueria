import React from 'react'
import '../utils/css/controlrecoleccion.css'
import '../utils/css/estilosglobales.css'
import {Link} from "react-router-dom"

import atras from "../utils/images/icons8-volver-50.png"
import inicio from "../utils/images/icons8-casa-24.png"

function Controlrecoleccion() {
	return (
		<div id="padre_control"> 
      
     
    <Link to="/Recoleccion" class="btn">
             <span><img src={atras} /></span>
             </Link>
             <Link to="/Inicio" class="btn">
             <span><img src={inicio} /></span>
             </Link>
      <h1> la vaca lola </h1>
      <div id ="parteinferior">
      <div className="fechas">g</div>
        <div className="litros"> h</div>
      </div>
      </div>
		)	

};
export default Controlrecoleccion
