import React, { useState } from 'react';
import './registrogranja.css'
import atras from "../../utils/images/icons8-volver-50.png"
import Modalregistro from '../Modalregistro/Modalregistro'
import Modaleditar from '../Modaleditar/Modaleditar'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Modalregistro/Modalregistro.css'


import {Link} from "react-router-dom"
import { db } from '../firebase';



function Registragranja (props) {
  
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModalRegistro, setModaleditar] = useState(false);
  
  const [values, setValues ] = useState(
    {
      nombre_granja: "",
      Nombre_del_titular: "",
      Departamento: "",
      Municipio_o_ciudad: "",
      Telefono: "",
      Correo_electronico: "",
      Ruta_de_recoleccion:""


      
    }
  )
  
  const handleChange = (e) => {
     e.preventDefault()
     setValues({
       ...values,
      [e.target.name]: e.target.value
     })
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault() 
    db.collection("granjas").doc().set(values)
  }
  
  

  const  toggle = () => setModalRegistro(!modal);

    return (
    	<div id="padre_registro">
    	
    	 <Link to="/Inicio" class="btn">
        
             <span><img src={atras} /></span>

             </Link>
              <h1> FORMULARIOS </h1>
            
              <Button color="danger" onClick={toggle}>{buttonLabel}Registro </Button>
              <Button color="danger" onClick={toggle}>{buttonLabel}editar</Button>

              <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
          <div class="contenedor">
          <ModalHeader id="header" toggle={toggle}>Registrar granja</ModalHeader>
            <ModalBody>

              <form class="body">
                <div class="columna">
                  <label htmlFor="">Nombre de la granja</label>
                  <input type="text" placeholder="Nombregranja" name="nombre_granja" value={values.nombre_granja} onChange={handleChange}/>

                  <label htmlFor="">Nombre del titular</label>
                  <input type="text" placeholder="Nombretitular" name="Nombre_del_titular" value={values.Nombre_del_titular} onChange={handleChange}/>
             
                  <label htmlFor="">Departamento</label>
                  <input type="text" placeholder="Departamento" name="Departamento" value={values.Departamento} onChange={handleChange}/>

                  <label htmlFor="">Municipio o ciudad</label>
                  <input type="text" placeholder="Municipio" name="Municipio_o_ciudad" value={values.Municipio_o_ciudad} onChange={handleChange}/>
                </div>
                <div class="columna">
                  <label htmlFor="">Telefono</label>
                  <input type="number" placeholder="Telefono" name="Telefono" value={values.Telefono} onChange={handleChange}/>

                  <label htmlFor="">Correo electronico</label>
                  <input type="Email" placeholder="correo" name="Correo_electronico" value={values.Correo_electronico} onChange={handleChange}/>
               

                 <label htmlFor="">Ruta de recoleccion</label>
                 <input type="number" placeholder="ruta" name="Ruta_de_recoleccion" value={values.Ruta_de_recoleccion} onChange={handleChange}/>
                   </div>



              </form>
            </ModalBody>
          <ModalFooter className="footer">
            <Button id="btn1"  onClick={handleSubmit}>Guardar </Button>
            <Button id="btn2"  onClick={toggle}>Cancelar</Button>
          </ModalFooter>
          </div>
        </Modal> 
      </div>      
         
              
              
          
          
         
    )

}

export default Registragranja

