console.log("corriendo");

//agarrar un elemento del DOM

let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

//propiedades mas utilizadas
//extraera todo el contenido html de la etiqueta 
console.log(elementoDOM.innerHTML);

//extrae todo el contenido del texto de la etiqueta 
console.log(elementoDOM.innerText)

elementoDOM.innerText= "Te cambie desde el JS"
console.log(elementoDOM.innerHTML);
elementoDOM.innerHTML="<span> cambie otra vez </span>"
console.log(elementoDOM.innerHTML);

//Agarrar otro elemento del HTML

const contenido = document.querySelector('#content');//si es clase . y si es un id # parecido a css
console.log(contenido);

contenido.innerHTML='<article><h1>Ingresado desde JS</h1><h2>y soy el hermano</h2></article>';
console.log('contenido');

//agarramos el boton 

const btnApretable=document.getElementById('btnMagia');

btnApretable.addEventListener('click',()=>{

    alert('Avada Kedavra');
    console.log("Despues del alert, COPPERFIELD")
})

function apretandoBoton(){
    let nombre= prompt("Ingrese tu nombre");
    let apellido=prompt("ingresa tu apellido");
    alert(nombre+" "+apellido);
}

function cambiandoInput(e){
    //target dondeapunto el evento 
    console.log(e.target.value);
    console.log("cambie");
}


