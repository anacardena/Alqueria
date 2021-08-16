import React, { useState, useEffect } from 'react';
import lapiz from '../../utils/images/pencil.png'
import borrar from '../../utils/images/eliminar.png'
import './registrogranja.css'
import atras from "../../utils/images/icons8-volver-50.png"
import buscar from "../../utils/images/icons8-búsqueda-24.png"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Modalregistro/Modalregistro.css'
import '../Modaleditar/modaleditar.css'
import {toast} from 'react-toastify'
import {Link} from "react-router-dom"
import { db } from '../firebase';



function Registragranja (props) {
  const {
    buttonLabel,
    className
  } = props;

  const  getGranjas= () =>{
    const granjas = db.collection("granjas").doc().get()
    console.log(granjas.data) } 
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
  const onDeleteLink = async (id) => {
    if (window.confirm("estas seguro de querer eliminar este usuario?")){
    await db.collection('granjas').doc(id).delete();
    toast('Usuario eliminado',{ //Para el coso verde al añadir
    type: "error",
    autoClose: 2000,
      });
    }
}

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
  

   const getLinks = async() =>{
    db.collection("granjas")
    .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
            // console.log(docs)
    });
    setGranjas(docs);
   });
  }

    useEffect( () => {
    getLinks();
    }, []);




    return (

      <div id="padre_registro">

        <div className="parte_superior">
          <Link to="/Inicio" id="btn">
          <span><img src={atras} /></span>

          </Link>
          <Button id="botonregistro"  onClick={toggle}>{buttonLabel}Registro </Button>

          <div className="buscador">
          
          <button type="button" id="search"> <img src={buscar} /> </button>
          </div>
        </div>
        <div  className="tabla">
          <table id="customers">
            <tr>
           <th>Nombre del titular</th>
           <th>nombre de la granja</th>
           <th>Departamento</th>
           <th>ruta</th>
           <th>Telefono</th>
           <th>Aciones</th>
  </tr>
  {granjas &&  granjas.map(docu => (
                    <tr>
                        {console.log(docu.nombre_granja)}
                        <td>{docu.Nombre_del_titular}</td>
                        <td>{docu.nombre_granja}</td>
                        <td>{docu.Departamento}</td>
                        <td>{docu.Ruta_de_recoleccion}</td>
                        <td>{docu.Telefono}</td>
                        <td>
                            <button className="botonEditar" onClick={() => togglEditar(togglEditar)}>
                            <img src={lapiz} alt="Editar"/>
                            </button>
                            <button className="botonEliminar"onClick={() => onDeleteLink(docu.id)}><img src={borrar} /></button>
                      </td>
                    </tr>
            ))}
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