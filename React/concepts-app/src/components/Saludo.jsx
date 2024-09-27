import { useState } from "react";
import {Adios} from './Adios';

//Dedclaracion de un componente 
export const Saludo = ()=>{

  //let nombre = "Karla"

  const [nombre,cambiarNombre] = useState("Sofia");

    return(
      <>
        <h3>Yo estoy en el componente Saludo</h3>
        <h2>Hola {nombre}, como estas </h2>
        <button onClick={()=>{cambiarNombre("Karla")}}>Magia</button>
      
      < Adios nombreUsuario={nombre} />
      </>
    )
  
  }

