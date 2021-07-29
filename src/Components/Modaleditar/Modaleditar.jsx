import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Modaleditar = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  

    const [modalEditar, setModalEditar] = useState(false);

    const toggle = () => setModalEditar(!modalEditar);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modalEditar} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Editar granja</ModalHeader>
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
  
  export default Modaleditar;
