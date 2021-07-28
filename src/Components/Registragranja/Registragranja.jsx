import React from 'react'
import './registrogranja.css'
import atras from "../../utils/images/icons8-volver-50.png"
import {Link} from "react-router-dom"

function Registragranja () {
    return (
    	<div id="padre_registro">
    	
    	 <Link to="/Inicio" class="btn">
             <span><img src={atras} /></span>

             </Link>
              <h1> aquí debes hacer el registro de las granjas donde el administrador hace cambios </h1>

         </div>
    )

}

export default Registragranja