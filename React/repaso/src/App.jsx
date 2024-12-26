
import './App.css'

const BASEurl='https://reqres.in/'

function App() {
const login = async(credenctials)=>{
//Realizar la consulta -> enviamos un mensajero
const response = await fetch(BASEurl+'api/login',{
method:'POST',
headers:{//HEADERS: son configuraciones o caracteristicas a nuestra peticion 
  //si enviamos datos aclaramos el tipo de DATO Enviado
  'Content-Type':'application/json'
},

body: JSON.stringify(credenctials)


})
const data = await response.json();
console.log(data);

}

login({
  "email":"eve.holt@regres.in",
  "password":"cityslicka"
});

const getUsers = async(token) =>{
  const response = await fetch(BASEurl+'/api/users?page=2',{
    method:'GET',
    headers:{
      'Authorization' : `Bearer ${token}`//en la mayoria de casos se utiliza por se jsw
    }
  })

  const data = await response.json();
  console.log(data);

}

getUsers('');
  return (
    <>
      <div>
        <h1>Practica Metrodos HTTP FETCH</h1>
       </div>
    </>
  )
}

export default App
