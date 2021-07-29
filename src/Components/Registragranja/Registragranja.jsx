import React from 'react'
import './registrogranja.css'
import atras from "../../utils/images/icons8-volver-50.png"
import Modalregistro from '../Modalregistro/Modalregistro'
import Modaleditar from '../Modaleditar/Modaleditar'

import {Link} from "react-router-dom"



function Registragranja () {
    return (
    	<div id="padre_registro">
    	
    	 <Link to="/Inicio" class="btn">
             <span><img src={atras} /></span>

             </Link>
              <h1> FORMULARIOS </h1>
            <Modalregistro className="" buttonLabel="Registrar" />
            <Modaleditar className="" buttonLabel="Editar"/>
                
            
         
              
              
          
          
         </div>
    )

}

export default Registragranja