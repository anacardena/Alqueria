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
                             <div> <Link to="/Recoleccion" class="btn"><span><img src={atras} /></span></Link></div>
                              <div><Link to="/Inicio" class="btn"><span><img src={inicio} /></span></Link></div>
                              <div><h1> la vaca lola </h1> </div>
                     </div>
                      <div id ="parteinferior">
                              <div  className="tabla">
                                 <table id="customers">
                                     <tr>
                                        <th>fecha</th>
                                        <th>Cantidad</th>
                                        <th>acciones</th>
                                     </tr>
                                      {/*{produccion && produccion.map(cant =>(*/}
                                     <tr>
                                       <td>29 / 08 / 2021 </td>
                                       <td>108</td>
                                       
                                       {/* <td>{cant.fecha}</td>
                                       <td>{cant.numero}</td>*/}
                                        <td> <button className="botoneliminar" > <img src={borrar}/> </button></td>
                                       
                                    </tr>
                                    <tr>
                                      <td>16 / 08 / 2021</td>
                                      <td>85</td>
                                      <td> <button className="botoneliminar" > <img src={borrar}/> </button></td>
                                    </tr>
                                    {/* ))}*/}
                                 </table>
  
                              </div>
                                
                              
                              <div className="litros"> 
                                   
                                  
                                   <form onSubmit={handleSubmit}>
                                       <h3>Digita la fecha de hoy</h3>
                                        <input id="f" name="fecha" type="date" />
                                         
                                     
                                         <h3 >¿cuántos litros se produjeron hoy?</h3>
                                         <input id="numero" name="numero" type="number"/>
                                         
                                          <div><button id="Guardar" type="submit"><strong>Guardar  </strong> </button> </div>
                                  </form>        
                                 
                              </div>
                    </div>
        </div>
      )
};
export default Controlrecoleccion