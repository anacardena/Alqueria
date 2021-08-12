import React, {useEffect, useState} from 'react' //crear el estado de la aplicación, son datos que pertenecen a ese componente cada vex que yo guardo algo afecto el estado
import './controlrecoleccion.css'
import {Link} from "react-router-dom"
import atras from "../../utils/images/icons8-volver-50.png"
import inicio from "../../utils/images/icons8-casa-24.png"
import lapiz from '../../utils/images/pencil.png'
import borrar from '../../utils/images/eliminar.png'
import {db}  from '../firebase'; //conecta con firebase

function Controlrecoleccion(props) { //props son las propiedades, todos los datos que le están pasando

 const [cantidad, setCantidad] = useState([]);


              //una función para agregar o editar información
  const addOrEditCant = async (CantObject) => {
  //el await funciona para que, mientras guardarlos se vaya ejecutdo otro código
  await db.collection("produccion").doc().set(CantObject); //crea la colección en firebase
  console.log("nueva información agregadda")
  };

  const onDelete = async(id) => {
    if (window.confirm('oye tú, ¿seguro que quieres eliminalo :0')) 
    {
     await  db.collection('produccion').doc('id').delete();
    }
 
  };

  const getCant = async () => { //le hace una petición a firebase
        db.collection("produccion").onSnapshot((querySnapshot) => { 
          let docs =[]
        querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id});  
   });
      console.log(docs)   //setCantidad(docs);
  });
};
 useEffect (() => {
      getCant();
 }, []);




  const initialStateValues = {
  fecha:"",
  numero:"",
  };

const [values, setValues] = useState(initialStateValues); //permite alterar el valor 
 
  const handleInputChange = (e) => {
   const { name, value } = e.target;  //reconoce el imput que tipea y el valor que se le da
   setValues({...values, [name]: value}) //para que copee los valores actuales y luego el imput que esten actualizando coloque el valor actual que esté tipeando
 
  }
 
    //el handleSubmit recibe la información del evento
    const handleSubmit = (e) => {
      e.preventDefault();
      addOrEditCant(values); 
       setValues({...initialStateValues})//una vez guarde los datos se limpie el formulario
    };
	return (
		<div id="padre_control"> 
                   <div id="parte_superior">
                            <Link to="/Recoleccion" class="btn"><span><img src={atras} /></span></Link>
                            <Link to="/Inicio" class="btn"><span><img src={inicio} /></span></Link>
                            <h1> la vaca lola </h1>
                   </div>
                    <div id ="parteinferior">
                            <div  className="tabla">
                               <table id="customers">
                                   <tr>
                                      <th>fecha</th>
                                      <th>Cantidad</th>
                                      <th>acciones</th>
                                   </tr>
                                    {cantidad && cantidad.map(cant =>(
                                   <tr>
                                      <td>{cant.fecha}</td>
                                     <td>{cant.numero}</td>
                                      <td> <button className="botoneliminar" onClick={() =>onDelete(cant.id)}> <img src={borrar}/> </button></td>
                                  </tr>
                                   ))}
                               </table>

                            </div>
                               {/*<div className="columna">
                          
                                   <div className="datos">
                                 {cantidad && cantidad.map(cant =>(
                                  
                                   <> <div id="fecha"><p>{cant.fecha}</p></div>
                                
                                 <div id="cantidad"><p>{cant.numero}</p></div>
                               <button className="botoneditar"  ><img src={lapiz}/> </button>
                               <button className="botoneliminar" onClick={() =>onDelete(cant.id)}> <img src={borrar}/> </button>
                                  </>
                                  ))
                                }
                             </div>
                           </div>*/}
                            
                            <div className="litros"> 
                                 
                                 <div id="leche-cantidad"> 

                                 <form onSubmit={handleSubmit}>
                                      <h3>Digita la fecha de hoy</h3>
                                      <input id="f" name="fecha" type="date" onChange={handleInputChange}  value={values.fecha}/>
                                       <h3 >¿cuántos litros se produjeron hoy?</h3>
                                       <input id="numero" name="numero" type="number" onChange={handleInputChange} value={values.numero}/>
                                  
                                 
                                 <div > <button id="Guardar" type="submit"> Guardar </button>  </div>     
                                </form>
                                </div>
                            </div>
                  </div>
      </div>
		)	
};
export default Controlrecoleccion
  