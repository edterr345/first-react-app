import React from "react"
import "./Navbar.css"
import CartWidget from "./CartWidget.js"
//import Logo from "../../assets/images/logo.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  
  <Link className="navbar-brand" to="/"><i className="fa fa-plug" />Eléctrica<b>Terrones</b></Link>  		
  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  
  <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">		
    <form className="navbar-form form-inline">
      <div className="input-group search-box">								
        <input type="text" id="search" className="form-control" placeholder="Buscar ..." />
        <span className="input-group-addon"><i className="material-icons"></i></span>
      </div>
    </form>
    <div className="navbar-nav ml-auto">
      <a href="/#" className="nav-item nav-link"><i className="fa fa-home" /><span>Inicio</span></a>
      <a href="/#" className="nav-item nav-link"><i className="fa fa-people-carry" /><span>Provedores</span></a>
      
      <Link className="nav-item nav-link" to="/categorias"><i className="fa fa-plus-square" /><span>Categorias</span></Link>
      
      <a href="/#" className="nav-item nav-link"><i className="fa fa-plug" /><span>Productos</span></a>
      {/*<a href="/#" className="nav-item nav-link"><i className="fa fa-envelope" /><span>Mensajes</span></a>		
      <a href="/#" className="nav-item nav-link"><i className="fa fa-bell" /><span>Notificaciones</span></a>*/}
      <CartWidget />
      <div className="nav-item dropdown">
        <a href="/#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" /> Eduardo Terrones <b className="caret" /></a>
        <div className="dropdown-menu">
          <a href="/#" className="dropdown-item"><i className="fa fa-user-o" /> Perfil</a>
          <a href="/#" className="dropdown-item"><i className="fa fa-calendar-o" /> Calendario</a>
          <a href="/#" className="dropdown-item"><i className="fa fa-truck-loading" /> Inventario</a>
          <div className="divider dropdown-divider" />
          <a href="/#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Cerrar sesión</a>
        </div>
      </div>
    </div>
  </div>
</nav>

)
export default Navbar