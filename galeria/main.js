export default function Gallery({gallery, currentIndex, updateGallery}){
  //Elementos del DOM a actualizar
  const titleElement=document.getElementById("title");
  const imageElement=document.getElementById("image");
  const descriptionElement = document.getElementById("description");

  //funcion que actualiza el contenido de la galeria 

  function updateContent(){
    const currentItem= gallery[currentIndex];//toma la imagen actual del array
    titleElement.textContent = currentItem.title;//actualiza el titulo de la imagen 
    imageElement.src=currentItem.src;//actualiza la imagen 
    descriptionElement.textContent = currentItem.description;//actualiza la decripcion 

  }

  updateContent();//llama a la funcion para actualizar la galeria inicialmente


  //botones de navegacion 

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  //funcion de navegacion que se reutiliza para los botones prev y next
  function navigate(direction){
    currentIndex= (currentItem = direction + gallery.length) % gallery.length;
  updateContent();
  
  }

  //añadir event listeners a los botones, reutizando la funcion navigate
  prevBtn.addEventListener("click",() => navigate(-1));//navega a la imagen anterior
  nextBtn.addEventListener("click",() => navigate(1))
}