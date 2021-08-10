//aquí se crea la función para guaardar datos 
import React, {useEffect, useState} from "react";
import {db}  from '../firebase'; //conecta con firebase



const cantidad = () => {

     const [cantidad, setCantidad] = useState([]);


              //una función para agregar o editar información
  const addOrEditCant = async (CantObject) => {
  //el await funciona para que, mientras guardeos se vaya ejecutdo otro código
  await db.collection("produccion").doc().set(CantObject); //crea la colección en firebase
  console.log("nueva información agregadda")
  };

  const onDelete = (id) => {
  	if (window.confirm('oye tú, ¿seguro que quieres eliminalo :0')) 
  	{
  	 await	db.collection('produccion').doc('id').delete();
  	}
 
  };

  const getCant = async () => { //le hace una petición a firebase
        db.collection("produccion").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
      	docs.push({...doc.data(), id:doc.id});//cada vez que me traiga todoss los datos
   });
        setCantidad(docs);
  });
};
 useEffect (() => {
      getCant();
 }, []);



  function addOrEdit={addOrEdit}
};

export default cantidad;