import React,  { useState, useEffect } from 'react'
import './recoleccion.css'
import {Link} from "react-router-dom"
import atras from "../../utils/images/icons8-volver-50.png"
import buscar from "../../utils/images/icons8-búsqueda-24.png"
import { db } from '../firebase';
import borrar from '../../utils/images/eliminar.png'
import control from '../../utils/images/icons8-panel-de-control-50.png'
function Recoleccion  (props) {

      /*state={
        busqueda: '',
        nombres: []
      }

      onChange=async e =>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarElementos();
      }
      componentDidMount(){
        this.setState({nombres: granjas});
      }
      filtrarElementos=() => {
        var search=granjas.filter(item=>{
          if(item.nombre_granja.icludes(this.state.busqueda)){
            return item;
          }
        });
        this.setState({nombre: search});
      }*/


      const  getGranjas= () =>{
        const granjas = db.collection("granjas").doc().get()
        console.log(granjas.data) } 
      const [granjas,setGranjas] =useState()
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
        <div id="contenedor_recoleccion">
                <div className="superior">
                          <div id="boton">
                                 <Link to="/Inicio" class="btn">
                                 <span><img src={atras} /></span>
                                 </Link>
                         </div>
                         <form>
                         <input type="text" name="busqueda" placeholder="digite el nombre de la granja" />
                         <button type="button" id="search"><img src={buscar} /></button>
                         </form>
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
                          <Link to="/Controlrecoleccion" class="btn">  <button className="produccion"><img src={control} /></button></Link>
                      </td>
                    </tr>
            ))}
</table>

        </div>
               
        </div>
    )

}

export default Recoleccion