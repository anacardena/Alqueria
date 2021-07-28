import React from 'react'
import './recoleccion.css'
import {Link} from "react-router-dom"
import atras from "../../utils/images/icons8-volver-50.png"
import buscar from "../../utils/images/icons8-búsqueda-24.png"
function Recoleccion () {
    return (
    	<div id="contenedor_recoleccion">
    	        <div className="superior">
                          <div id="boton">
                                 <Link to="/Inicio" class="btn">
                                 <span><img src={atras} /></span>
                                 </Link>
                         </div>
                         <form>
                         <input type="text" id="searchterm" placeholder="digite el nombre de la granja" />
                         <button type="button" id="search"><img src={buscar} /></button>
                         </form>
                </div>
                 <div className="información">
                 <div id="numero"> ID</div>
                 <div id="numero"> Titular</div>
                 <div id="numero"> Granja</div>
                 <div id="numero"> Total</div>
                 </div>
                <div className="granjas">
                      <Link to="/Controlrecoleccion" class="btn">
                      <span>Controlrecoleccion</span>
                      </Link>
             </div>
	    </div>
    )

}

export default Recoleccion