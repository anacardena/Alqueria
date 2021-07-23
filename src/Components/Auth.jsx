import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import {Link} from "react-router-dom"

export default (props) => {

	return (
         <div>
         <h1> Bienvenido </h1>
          <div>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email"  id="email"/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button > Inicio Sesión</button>
          </div>  
         </div>
		   )
}
