import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import {Link} from "react-router-dom"
import manchas from "../utils/images/manchas.jpg"
import fondo from "../utils/images/fondo.jpg"
import '../utils/css/auth.css'

export default (props) => {

	return (
         <div id="padre_Auth" style={{backgroundImage:`url(${manchas})`}} >
                 <div id="contenedor" >
                       <div id="Bienvenido" style={{backgroundImage:`url(${fondo})`}}>
                            <h1> Bienvenido a Alquería </h1>
                            <p>Inicia sesión para continuar el acceso</p>
                       </div>
                       <div id="login">
                         <h2>Acceso	</h2>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email"  id="email"/>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" />
                        <Link to="/Inicio">
                        <button>	Iniciar sesión </button> </Link>
                       </div>  
                </div>
        </div>
		   )
}
