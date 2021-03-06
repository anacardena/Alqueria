import React from 'react'
import './inicio.css'
import {Link} from "react-router-dom"
import leche from "../../utils/images/productores.jpg"
import ternero from "../../utils/images/registro.jpg"

function Inicio() {
	return (
		<div className="padre_inicio"> 
     <div id="cerrar">
       <Link to="/" class="btn">
             <button>  <strong>cerrar Sesión </strong> </button> </Link>
       </div>     
      
   
      <div id="botones">
              <div className="imagenes">
              <div style={{backgroundImage:`url(${leche})`}} id="leche" >
             <Link to="/Recoleccion" class="btn">
             <button><strong> Recoleccion</strong></button>
             </Link>
             </div>
             </div>
             <div className="imagenes">
             <div style={{backgroundImage:`url(${ternero})`}} id="ternero">
              <Link to="/Registragranja" class="btn">
             <button><strong> Registro</strong></button></Link>
             </div>
             </div>
         </div>
	    </div>
		)	

};
export default Inicio