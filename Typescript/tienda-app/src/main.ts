import './style.css'
import './clases/producto.ts';
import { Producto } from './clases/producto.ts';
import { Tienda } from './clases/Tienda.ts';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>holis desde MainTs</h1>
    <form id="formProducto"> 
    <section>
      <label>Nombre Producto</label>    
      <input type="text" id="nombre" name="nombre" placeholder="Ingresa nombre del producto">
    </section>

   <section>
      <label>Precio</label>    
      <input type="text" id="precio" name="precio" placeholder="Ingresa su precio">
    </section>

     <section>
      <label>Cantidad</label>    
      <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad">
    </section>

    <button type="submit">agregar producto</button>
    </form>

  </div>
`

//Inicializamos la tienda para poder manupular los productos

const tienda= new Tienda();



//document.querySelector<HTMLElement>('#parrafo')!.innerText="Esto es texto desde el p"

const form = document.getElementById("formProducto") as HTMLFormElement;

form.addEventListener('submit',(e:SubmitEvent) =>{
e.preventDefault();
console.log("hola");

const id= Date.now();

const nombre =( document.getElementById('nombre') as HTMLInputElement).value;
const precio =parseFloat((document.getElementById('precio') as HTMLInputElement).value);

const cantidad =parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

console.log(id);
console.log(nombre);
console.log(precio);
console.log(cantidad);

let productito = new Producto(id,nombre,precio,cantidad);
console.log(productito);
tienda.agregarProducto(productito);


})