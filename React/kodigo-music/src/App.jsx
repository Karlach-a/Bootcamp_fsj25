
import './App.css'
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import Librerias from './pages/Librerias';
import Registro from './pages/Registro.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const  App= ()=> {

  return (
    <>
    <BrowserRouter>

    <div style={{display:'flex'}}>
      <Sidebar/>
      <div style={{flex:1, padding:'20px'}}>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/librerias" element={<Librerias/>} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>

      </div>


    </div>
    
    </BrowserRouter>

    </>
  )
}

export default App

