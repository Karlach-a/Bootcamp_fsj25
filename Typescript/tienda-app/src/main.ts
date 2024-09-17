import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>holis desde MainTs</h1>
    <form id="loginform"> 
    <section>
      <label>Nombre de usuario:</label>    
      <input type="text" id="username" name="username" placeholder="Ingresa tu nombre de Usuario">
    </section>

   <section>
      <label>Password:</label>    
      <input type="password" id="password" name="password" placeholder="Ingresa tu nombre de Usuario">
    </section>

    <button type="submit">Iniciar Sesion</button>
    
    </form>
  </div>
`



//document.querySelector<HTMLElement>('#parrafo')!.innerText="Esto es texto desde el p"

const form = document.getElementById("loginform") as HTMLFormElement;

form.addEventListener('submit',(e:SubmitEvent) =>{
e.preventDefault();
console.log("hola");



})