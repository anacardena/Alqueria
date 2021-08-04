import React from 'react'
import './controlrecoleccion.css'
//import './controlrecoleccion.js'
import {Link} from "react-router-dom"
import atras from "../../utils/images/icons8-volver-50.png"
import inicio from "../../utils/images/icons8-casa-24.png"

function Controlrecoleccion() {
	return (
		<div id="padre_control"> 
                   <div id="parte_superior">
                            <Link to="/Recoleccion" class="btn"><span><img src={atras} /></span></Link>
                            <Link to="/Inicio" class="btn"><span><img src={inicio} /></span></Link>
                            <h1> la vaca lola </h1>
                   </div>
                    <div id ="parteinferior">
                             <div className="datos">
                                 <div id="fecha">fecha</div>
                                 <div id="cantidad"></div>
                              </div>
                            <div className="litros"> 
                           
                                 <div id="leche-cantidad"> 
                                 <form>
                                  <h3>Digita la fecha de hoy</h3>
                                  <input id="f" type="date"/>
                                   <h3 >¿cuántos litros se produjeron hoy?</h3>
                                 <input id="numero" type="number"/>
                                  
                                 </form>
                                 </div>
                                 <div > <button id="Guardar" onClick={agregar} > Guardar </button>  </div>     
      
                            </div>
                    </div>
      </div>
		)	
};
export default Controlrecoleccion