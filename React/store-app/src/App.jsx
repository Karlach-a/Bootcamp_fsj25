import './App.css'
import { Products } from './pages/products/Products'
import { Auth } from './pages/auth/Auth';

function App() {

  return (
    <>
     <h1>CRUD BASICO FireStore</h1>
     <Auth />
    
     <Products />
    
    </>
  )
}

export default App