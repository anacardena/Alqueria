import React from 'react'
import '../utils/css/inicio.css'
import '../utils/css/estilosglobales.css'
import {Link} from "react-router-dom"
import leche from "../utils/images/productores.jpg"
import ternero from "../utils/images/registro.jpg"
import logo from "../utils/images/logoalquería.jpg"

function Inicio() {
	return (
		<div className="padre_inicio"> 
      
      <div id="banner" style={{backgroundImage:`url(${logo})`}}> </div>
   
      <div id="botones">
              <div style={{backgroundImage:`url(${leche})`}} id="leche" >
             <Link to="/Recoleccion" class="btn">
             <span>Recoleccion</span>
             </Link>
            
             </div>
             <div style={{backgroundImage:`url(${ternero})`}} id="ternero">
              <Link to="/Registragranja" class="btn">
             <span>registro</span> </Link>
             </div>
         </div>
	    </div>
		)	

};
export default Inicio


