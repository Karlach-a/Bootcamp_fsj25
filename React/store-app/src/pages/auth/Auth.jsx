import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
//import { useNavigate } from "react-router-dom";
import { useContext } from "react";
//import { UserContext } from "../../../context/UserDataContext";

export const Auth = () => {

    const {register,handleSubmit} = useForm();
    //const navigate = useNavigate(UserContext);

   // const {user,setUser} = useContext(UserContext);

    const onSubmitForm = (data) => {
        console.log(data);
        
        signInWithEmailAndPassword(auth, data.mail, data.pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setUser(user);

            alert("Inicio de sesion con exito. Bienvenido!")
            
        navigate("/")
        })
        .catch((error) => {
        console.error(error);
        
    });

    }

  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label>Email</label>
            <input type="text" id="email" placeholder="Example: mail@mail.com" {... register('mail')} />
            <label>Password</label>
            <input type="password" id="password" placeholder=" ****** " {... register('pass')}/> 
            <button type="submit">Login</button>
            
            <label> Email</label>
            <input type="text" id="email" placeholder="Example: Email@mail.com" {... register('email') }/>
            <label> Password</label>
            <input type="password" id="password" placeholder="Enter your password" {... register('password') }/>
            <label>Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Repeat your password" {... register('confirmPassword') }/>
            
            <button type="submit">Send</button>
            

        </form>
    </div>
    

    
  )
}