import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import {Link} from "react-router-dom"
import manchas from "../../utils/images/manchas.jpg"
import fondo from "../../utils/images/fondo.jpg"
import './auth.css'

export default (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email,password);
    }
  	return (
         <div id="padre_Auth" style={{backgroundImage:`url(${manchas})`}} >
                 <div id="contenedor" >
                       <div id="Bienvenido" style={{backgroundImage:`url(${fondo})`}}>
                            <h1> Bienvenido a Alquería </h1>
                            <p>Inicia sesión para continuar el acceso</p>
                       </div>
                       <div id="acceso">
                         <h2>Acceso	</h2>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email"  id="email" onChange={ (ev) => setEmail(ev.target.value)  } />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={ (ev) => setPassword(ev.target.value)  } />
                        
                     <button onClick={login}>  Iniciar sesión </button> 
                       </div>  
                </div>
        </div>
		   )
 
}
