//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header/Navbar"
import React, { Component, useEffect, useState } from 'react'
import $ from 'jquery'
import ItemsCartContainer from "./components/Header/ItemsCartContainer.js"
import ItemListContainer from "./components/MainSection/ItemListContainer.js"
import ProteccionSobretension from "./assets/images/ProteccionSobretension.jpg"
import FocoLED from "./assets/images/Foco-LED.png"
import contactoPhilips from "./assets/images/contacto-Philips.webp"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Category from './components/MainSection/Category';

class Item {
  constructor(id,nombre,descripcion, stock, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precio = precio;
    this.imagen = imagen;
  }
}

export default class App extends Component {
  jQuerycode = () => {
    (function () {
      $(".shopping-cart").fadeOut();
      $("#cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
      });
    })();
  }

  componentDidMount(){
    this.jQuerycode()
  }

  render() {
    return (
      <>
      
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/*<ItemListContainer saludo="Bienvenido"/>*/}
            <ItemsCartContainer saludo="Bienvenido"/>
          </Route>
          <Route path="/categorias/1">
          <ItemsCartContainer saludo="Bienvenido"/>
          <ItemsSetting/>
          </Route>
          <Route path="/categorias">
            {/*<ItemListContainer saludo="Bienvenido"/>*/}
            <ItemsCartContainer saludo="Bienvenido"/>
            <Category/>
            
          </Route>
        
         
        </Switch>
        </Router>
      </>
    )
  }
}
    
function ItemsSetting(){

  const [items, setItems] = useState([]);
  let multicontactoPhilips = new Item(1,'MULTICONTACTO PHILIPS SPS6222WB/37','Space Saving – This low-profile outlet adapter is designed for tight spaces and expands your normal wall outlet into a charging station with two outlets and two USB charging ports Charging Hub – Delivers 2. 1 Amps of power to rapidly charge your phone, tablet, MP3 player, smart watch and more',100,'$400.00', contactoPhilips);
  let focoPhilips = new Item(2,'Foco Philips LED Bulb - 5.5W- A19','', 200,'$34.50',FocoLED);
  let protectorSobretensionPhilips= new Item(3,'PHILIPS SPC6244WC/37 - Protector de sobretensión ...','', 300,'$745.00',ProteccionSobretension);
  
  useEffect(() => {
    
    new Promise((cargarDatosSuccess, cargarDatosFailure) =>{
     
      setTimeout(()=>{
        cargarDatosSuccess([multicontactoPhilips,focoPhilips,protectorSobretensionPhilips]);
      }, 2000);

    }).then(resultado => setItems(resultado))
  }, []);
  return (
    <div>
      <ItemListContainer items={items}/>
    </div>
  );
}

