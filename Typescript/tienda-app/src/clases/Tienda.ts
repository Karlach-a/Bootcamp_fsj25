import {Producto} from "./producto";

export class Tienda{
    private productos:Producto[] = [];
    constructor(){
        this.productos=JSON.parse(localStorage.getItem('productos') || '[]')
    }

    agregarProducto(producto:Producto){
        this.productos.push(producto);
        this.refreshLocal();
    }

    /*
      Guardamos todos los prodcutos de this.productos Dentro de LocalStorage key(clave) 'productos'
    */ 
    refreshLocal(){

        //Este guardado lo que hace es actualizar la lista de productos en el localStorage
        localStorage.setItem('productos',JSON.stringify(this.productos));
    }
}