import React, { useState, useEffect } from 'react';
import lapiz from '../../utils/images/pencil.png'
import borrar from '../../utils/images/eliminar.png'
import './registrogranja.css'
import atras from "../../utils/images/icons8-volver-50.png"
import buscar from "../../utils/images/icons8-búsqueda-24.png"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Modalregistro/Modalregistro.css'
import '../Modaleditar/modaleditar.css'


import {Link} from "react-router-dom"
import { db } from '../firebase';



function Registragranja (props) {
  
  const {
    buttonLabel,
    className
  } = props;

  const  getGranjas= ()=>{
    const granjas = db.collection("granjas").doc().get()
    console.log(granjas.data) 
  } 
  
  
  const [granjas,setGranjas] =useState()


  const [modal, setModalRegistro] = useState(false);
  const [modaleditar, setModalEditar] = useState(false);

  const [values, setValues] = useState(
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
    setValues({...useState})
  }
  
  const  toggle = () => setModalRegistro(!modal);
  const  togglEditar = () => setModalEditar(!modaleditar);



    return (

    	<div id="padre_registro">
    	  
    	 <Link to="/Inicio" class="btn">
        
        <span><img src={atras} /></span>

        </Link>
        
        <Button className="botonregistro"  onClick={toggle}>{buttonLabel}Registro </Button>
        

        <div className="buscador">
         <input type="text" id="searchterm" placeholder="digite el nombre de la granja" />
         <button type="button" id="search"><img src={buscar} /></button>
        </div>

        <div className="cont-formularios">
          <table>
            <tr>
              <th>ID</th>
              <th>TITULAR</th>
              <th>NOMBRE GRANJA</th>
              <th>PRODUCCION TOTAL</th>
              <th>ACCIONES</th>
            </tr>
            <tr className="tabla_amarillo">
              <td>X</td>
              <td>XXXXXXX</td>
              <td>XXXXXX</td>
              <td>XXXXX</td>
              <td><Button className="botoneditar"  onClick={togglEditar}>{buttonLabel} <img src={lapiz}  /> </Button>
              <Button className="botoneliminar"  >{buttonLabel} <img src={borrar} /> </Button>
              </td>
            </tr>
            
            
            

          </table>
        
        </div>
        

        
        

            
            
      
      <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
          <div class="contenedor">
          <ModalHeader id="header" >Registrar granja</ModalHeader>
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

        {/*modal editar */}
        <Modal isOpen={modaleditar} toggle={togglEditar} className={className} centered={true}>
          <div class="contenedor">
          <ModalHeader id="header" >Editar granja</ModalHeader>
            <ModalBody>

              <form class="body">
                <div class="columna">
                  <label htmlFor="">Nombre de la granja</label>
                  <input type="text" placeholder="Nombre granja"/>

                  <label htmlFor="">Nombre del titular</label>
                  <input type="text" placeholder="Nombre titular"/>
                </div>
                <div class="columna">
                  <label htmlFor="">Departamento</label>
                  <input type="text" placeholder="Departamento"/>

                  <label htmlFor="">Municipio o ciudad</label>
                  <input type="text" placeholder="Municipio"/>
                </div>
                <div class="columna">
                  <label htmlFor="">Telefono</label>
                  <input type="number" placeholder="Telefono"/>

                  <label htmlFor="">Correo electronico</label>
                  <input type="Email" placeholder="correo"/>
                </div>

                 <label htmlFor="">Ruta de recoleccion</label>
                 <input type="selection" placeholder="ruta"/>




              </form>
            </ModalBody>
          <ModalFooter className="footer">
            <Button id="btn1"  onClick={handleSubmit}>Guardar </Button>
            <Button id="btn2"  onClick={togglEditar}>Cancelar</Button>
          </ModalFooter>
          </div>
        </Modal>
      </div>  
      
      
         
             
              
        
         
    )

}

export default Registragranja

