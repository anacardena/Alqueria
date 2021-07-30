import React from 'react'
import '../utils/css/registrogranja.css'
import '../utils/css/recoleccion.css'
import logo from '../utils/images/logoalquería.jpg'
import atras from "../utils/images/icons8-volver-50.png"
import {Link} from "react-router-dom"

function Registragranja () {
    return (
    	<div id="padre_registro">
    	
    	 <div id="banner" style={{backgroundImage:`url(${logo})`}}> </div>
    	 <Link to="/" class="btn">
             <span><img src={atras} /></span>
             </Link>
             <h1>aqui se van a registrar las granjas
             </h1>
         </div>
    )

}


export default Registragranja