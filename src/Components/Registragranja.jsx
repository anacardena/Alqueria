import React from 'react'
import '../utils/css/registrogranja.css'
import '../utils/css/recoleccion.css'
import logo from '../utils/images/logoalquería.jpg'
import {Link} from "react-router-dom"
function Registragranja () {
    return (
    	<div id="padre_registro">
    	 <div id="banner" style={{backgroundImage:`url(${logo})`}}> </div>
    	 <Link to="/" class="btn">
             <span>atrás</span>
             </Link>
         </div>
    )

}

export default Registragranja