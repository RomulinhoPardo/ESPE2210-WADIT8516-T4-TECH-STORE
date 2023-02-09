import React from 'react'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  let navigate = useNavigate(); 
  const goToClientsPage = () => navigate("clients");
  const goToProductMenu = () => navigate("products");
  const goToProductsPage = () => navigate("products1");
  const goToUserMenu = () => navigate("users");
  const goToUserPage = () => navigate("users1");
  const goToSection1 = () => navigate("section1");
  const goToSection2 = () => navigate("section2");
  const goToSection3 = () => navigate("section3");

  return (
    <div className='nemu'>
      <h1 class="title1">Bienvenid@!</h1>
      <form>
        <button color="primary" class="myButton" onClick={goToClientsPage}>Qué es TechStore?</button>
        <button color="primary" class="myButton" onClick={goToSection3}>Nuestro Impacto</button>
        <button color="primary" class="myButton" onClick={goToProductMenu}>Instrucciones Generales Catálogo</button>
        <button color="primary" class="myButton" onClick={goToUserMenu}>Catálogo</button>
        <button color="primary" class="myButton" onClick={goToUserPage}>Administradores</button>
        <button color="primary" class="myButton" onClick={goToSection1}>Sobre Nosotros</button>
        <button color="primary" class="myButton" onClick={goToSection2}>Política Devolución</button>
        <button color="primary" class="myButton" onClick={goToProductsPage}>Términos y Condiciones</button>
      </form>
    </div>
  );
}
