import { addDoc, collection, getDocs, updateDoc,doc, deleteDoc } from 'firebase/firestore';
import {useForm} from 'react-hook-form';
import { db } from '../../firebase/config';
import { useEffect, useState } from 'react';

export const Products = () => {
    const {register,handleSubmit,reset,setValue} = useForm()
    const [products,setProducts] = useState([]);
    const [editId,setEditId]=useState(null);//para poder modificar poro medio del id del producto

    //obtener documentos de la coleccion 

    const getProducts = async () => {
        const productsCollection =   await getDocs(collection(db,'products'))
        const data = productsCollection.docs.map(  (doc) => ( {...doc.data(), id: doc.id } )
          )
        console.log(data);
        setProducts(data);
    }

    //agregamos un producto
    const addProduct = async (data) => {
        console.log(data.name);
        console.log(parseInt(data.stock));
        console.log(parseFloat(data.price));
        
        
      let response =  await addDoc(collection(db,'products'),{
        name: data.name,
         price: parseFloat(data.price),
        stock: parseInt(data.stock)
      })
        console.log(response);
        
        reset();
        getProducts();
    }

    //obtenerlos datos 
    const editProduct =(producto) => {
        console.log("editando un producto");
        console.log(producto);

        setValue('name',producto.name)
        setValue('price',producto.price)
        setValue('stock',producto.stock)
        //Guardamos el id para poder actualizar este producto
        setEditId(producto.id)
    }

    /*actualizamos un producto */
    const updateProducto= async (data)=>{ //async y away  a todo lo que sea peticiones
        const docRef = doc(db,'products',editId)//conexiones de base de datos esta en config 
   
        await updateDoc(docRef,{
        name: data.name,
         price: parseFloat(data.price),
        stock: parseInt(data.stock)})

        setEditId(null);
        reset();
        getProducts();
    
    }

    const deleteProduct= async (id)=>{
        const docRef = doc(db,'products',id)

        await deleteDoc(docRef)

        getProducts();//limpiar formulario
    }

    useEffect(()=> {
            //Ejecutamos funciones al momento de montar un componente
            getProducts();
        },[]
    )

  return (
    <>
        <h2>Productos</h2>

        <form onSubmit={editId ? handleSubmit(updateProducto) : handleSubmit(addProduct)}> 
            <section>
                <label>Nombre de producto</label>
                <input type="text" {...register('name')} required/>
            </section>
            <section>
                <label>Precio</label>
                <input type="text" {...register('price')} required/>
            </section>
            <section>
                <label>Cantidad</label>
                <input type="number" {...register('stock')} required/>
            </section>
            <button type='submit'>{editId ? 'Editar' : 'Guardar'}</button>
        </form>

        <main>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </thead>
            <tbody>
            {
                /*Listar los productos*/ 

                products.map((product)=> (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                          <td>  <button onClick={() =>{editProduct(product)}}>Edit</button>
                                <button onClick={()=>{deleteProduct(product.id)}}>Delete</button>
                          </td>
                    </tr>

                ))
            }
            </tbody>
            </table>
        </main>
    </>
  )
}