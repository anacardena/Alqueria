import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modalregistro.css'

const Modalregistro = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  

    const [modalRegistro, setModalRegistro] = useState(false);

    const toggle = () => setModalRegistro(!modalRegistro);
  
    return (
      <div>

        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modalRegistro} toggle={toggle} className={className} centered={true}>
        
          <ModalHeader toggle={toggle}>Registrar granja</ModalHeader>
          <ModalBody>
          <form action="">
                <label htmlFor="">Nombre de la granja</label>
                <input type="text" placeholder="Nombregranja"/>
                <label htmlFor="">Nombre del titular</label>
                <input type="text" placeholder="Nombretitular"/>
                <label htmlFor="">Departamento</label>
                <input type="text" placeholder="Departamento"/>
                <label htmlFor="">Municipio o ciudad</label>
                <input type="text" placeholder="Municipio"/>
                <label htmlFor="">Telefono</label>
                <input type="number" placeholder="Telefono"/>
                <label htmlFor="">Correo electronico</label>
                <input type="Email" placeholder="correo"/>
                <label htmlFor="">Ruta de recoleccion</label>
                <input type="number" placeholder="ruta"/>




            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default Modalregistro;

