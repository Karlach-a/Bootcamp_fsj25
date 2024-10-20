import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registro = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (f) =>{
        f.preventDefault();

        if(!name|| !email){
            alert('Por Favor, completar todos los datos');
            return;
        }
        console.log('Registro Completado',{name,email,pass});

    };

    return(
        <div className="d-flex  justify-content-center align-items-center">
        <Form onSubmit={handleSubmit}style={{width:'60%',margin:'30px'}}>
              <h2>Registro</h2>
            
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Nombre Completo</Form.Label>
             <Form.Control type="text" placeholder="Digita tu Nombre"  Value={name} onChange={(f) => setName(f.target.value)} />     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
             <Form.Control type="email" placeholder="Digita tu correo"  Value={email} onChange={(f) => setEmail(f.target.value)} />
           <Form.Text className="text-muted">
          No compartiremos tu correo 
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  Value={pass} onChange={(f) => setPass(f.target.value)}  />
      </Form.Group>
      </Form.Group>
          

          
           
       <button variant="dark" type="submit">Registrarse</button>
      
        </Form>
        </div>
    );
    
};
export default Registro;