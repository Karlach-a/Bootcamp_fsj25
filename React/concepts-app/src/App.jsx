
import './App.css'
import {Saludo} from './components/Saludo'
import {Saludo as Saludito} from './components/Saludo'
import{Adios} from './components/Adios'

function App() {

{/*soy un comentario js dentro del html retornado*/}
  return (
    <>
      <h1>Hola desde el App</h1>
      <h2>FSJ25</h2>

      {/* Llamada a un compente*/}
      <Saludo />
     
     
    </>
  )
}

export default App


