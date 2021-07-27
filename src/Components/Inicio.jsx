import React from 'react'
import '../utils/css/inicio.css'
import '../utils/css/estilosglobales.css'
import {Link} from "react-router-dom"
import leche from "../utils/images/productores.jpg"
import ternero from "../utils/images/registro.jpg"

function Inicio() {
	return (
		<div className="padre_inicio"> 
     <div id="cerrar">
       <Link to="/" class="btn">
             <button> cerrar Sesión </button> </Link>
       </div>     
      
   
      <div id="botones">
              <div className="imagenes">
              <div style={{backgroundImage:`url(${leche})`}} id="leche" >
             <Link to="/Recoleccion" class="btn">
             <button>Recoleccion</button>
             </Link>
             </div>
             </div>
             <div className="imagenes">
             <div style={{backgroundImage:`url(${ternero})`}} id="ternero">
              <Link to="/Registragranja" class="btn">
             <button>registro</button></Link>
             </div>
             </div>
         </div>
	    </div>
		)	

};
export default Inicio


