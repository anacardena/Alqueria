import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modaleditar.css'

const Modaleditar = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  

    const [modal, setModalEditar] = useState(false);

    const toggle = () => setModalEditar(!modal);
  
    return (
      <div>

        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
          <div class="contenedor">
          <ModalHeader id="header" toggle={toggle}>Editar granja</ModalHeader>
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
            <Button id="btn1"  onClick={toggle}>Guardar </Button>
            <Button id="btn2"  onClick={toggle}>Cancelar</Button>
          </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
  
  export default Modaleditar;
