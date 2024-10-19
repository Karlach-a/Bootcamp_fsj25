import { createContext,useState } from "react";

//Crear mi contexto


export const UserContext = createContext(null);

//Crear mi proveedor : se encargara de distribuir la info(el valor que le demos) a los diferentes componentes

export const MyProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser}}> 
            {children}
        </UserContext.Provider>
    )
}
