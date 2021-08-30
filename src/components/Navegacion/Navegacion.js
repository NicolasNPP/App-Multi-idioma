import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navegacion.css';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';


const Navegacion = ({ brandname, categoriauno, categoriados, categoriatres, categoriacuatro }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">  <Navbar.Brand href="/">{brandname}</Navbar.Brand> </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link className="colores" to="/">{t('menu.inicio')}</Link></Nav.Link>





          <Nav.Link><Link className="colores" to="/contact">{t('menu.contacto')}</Link></Nav.Link>

        </Nav>
        <Button color="secondary" className="boton" onClick={() => {
          i18n.changeLanguage("en");
          window.localStorage.setItem("lg", 'en');


        }}>EN</Button>

        <Button color="secondary" onClick={() => {
          i18n.changeLanguage("es");
          window.localStorage.setItem("lg", 'es');


        }}>ES</Button>



      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navegacion
