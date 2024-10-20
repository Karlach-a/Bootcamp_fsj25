import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled"; //para colocar los stilos'
import logo from "../assets/kodigomusic.png";

const SidebarContainer = styled.div`
width:250px;
background-color:#121212;
color:#00ADE3;
height:100vh;
padding:20px;
text-align:center;


`;




const NavLink = styled(Link)`
display:block;

font-size: 1.7rem;
    color:#4c2882;
    background: #EEEEEE;
    border-radius: 1rem;
    cursor:pointer;
    padding:.8rem 3rem;
    text-decoration:none;
    padding: 1rem;
   

    

&:hover{
  background:#4c2882;
  color:#EEEEEE;
    letter-spacing: .1rem;
}
`

const Sidebar =() =>(
    <SidebarContainer>
    <img src={logo} className="logot"/>
     <NavLink to="/">Inicio</NavLink>
     <NavLink to="/librerias">Tu Biblioteca</NavLink>
     <NavLink to="/registro">Registrarse</NavLink>
         
    </SidebarContainer>
);

export default Sidebar;