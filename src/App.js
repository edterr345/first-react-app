//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header/Navbar"
import React, { Component, useEffect, useState } from 'react'
import $ from 'jquery'
/*import ItemsCartContainer from "./components/Header/ItemsCartContainer.js"*/
import ItemListContainer from "./components/MainSection/ItemListContainer.js"
import ProteccionSobretension from "./assets/images/ProteccionSobretension.jpg"
import FocoLED from "./assets/images/Foco-LED.png"
import contactoPhilips from "./assets/images/contacto-Philips.webp"

import Cable1 from "./assets/images/cable1.jpg"
import Cable2 from "./assets/images/cable2.jpg"

import Interruptor1 from "./assets/images/interruptor1.jpg"
import Interruptor2 from "./assets/images/interruptor2.jpg"





import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Category from './components/MainSection/Category';
import ItemDetailContainer from './components/MainSection/Item/ItemDetailContainer';

class Item {
  constructor(id,nombre,descripcion, stock, precio, imagen, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria=categoria;
  }
}

class Categoria {
  constructor(id,nombre,descripcion,icon) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.icon = icon;
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
        <CategoriesSetting />
        <Switch>
          <Route exact path="/" component={withRouter(ItemsSetting)}>
            {/*<ItemListContainer saludo="Bienvenido"/>*/}
           
            
          </Route>
          <Route path="/categorias/:id" component={withRouter(ItemsSetting)}>
         {/* <ItemsCartContainer saludo="Bienvenido"/>*/}
          
          </Route>
          <Route path="/categorias">
            {/*<ItemListContainer saludo="Bienvenido"/>*/}
           {/* <ItemsCartContainer saludo="Bienvenido"/>*/}
            <Category/>
          </Route>
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
        </Router>
      </>
    )
  }
}
  
function CategoriesSetting(){
  
  const [categories, setCategories] = useState([]);


  let iluminacion = new Categoria(1,'iluminacion','descripcion',<i className="fa fa-lightbulb" />);
  let cables = new Categoria(2,'cables','descripcion',<i className="fa fa-plug" />);
  let interruptores= new Categoria(3,'interruptores','descripcion',<i className="fa fa-toggle-on" />);
  


  useEffect(() => {
    
    new Promise((cargarDatosSuccess, cargarDatosFailure) =>{
     
      setTimeout(()=>{
        cargarDatosSuccess([iluminacion, cables,interruptores]);
      }, 2000);

    }).then(resultado => setCategories(resultado))
  }, []);


  if(categories.length===0){
    return (
      <div>
       
      </div>
    );
  }
  else{
    
    return (
      <div>
        <Navbar categories={categories}/>
      </div>
    );
  }

}



function ItemsSetting(props){
  
  
  const [items, setItems] = useState([]);
  //id,nombre,descripcion, stock, precio, imagen
  //Iluminación
  let multicontactoPhilips = new Item(1,'MULTICONTACTO PHILIPS SPS6222WB/37','Space Saving – This low-profile outlet adapter is designed for tight spaces and expands your normal wall outlet into a charging station with two outlets and two USB charging ports Charging Hub – Delivers 2. 1 Amps of power to rapidly charge your phone, tablet, MP3 player, smart watch and more',100,'$400.00', contactoPhilips,'Iluminación');
  let focoPhilips = new Item(2,'Foco Philips LED Bulb - 5.5W- A19','ILUMINACION LED: Disfruta de los ahorros de energia y durabilidad que garantiza Philips LED.\n'+
  'LUZ CÁLIDA: Ideal para ambientes acogedores, como una recámara o sala de estár.\n'+
  'LARGA DURACIÓN: Una vida de aproximadamente 15,000 horas (o 15 años).\n'+
  'SIN PARPADEO: La tecnología LED de Philips busca lo mejor para tus ojos. Cuentan con parámetros de alta calidad que aseguran que su iluminación siempre va a ser la más comoda para ti y tu familia.', 200,'$34.50',FocoLED,'Iluminación');
  let protectorSobretensionPhilips= new Item(3,'PHILIPS SPC6244WC/37 - Protector de sobretensión ...','Power Station – Alimenta y protege 4 dispositivos electrónicos y 2 dispositivos portátiles con el protector de sobretensión de 4 salidas Philips con 2 puertos USB'+
  'Cable de diseño: alimenta tus dispositivos electrónicos con el elegante cable trenzado sin enredos de 1,2 m.'+
  'Enchufe plano: el diseño del enchufe plano ahorra espacio es discreto, al tiempo que también te deja más espacio para muebles o soportes'+
  'Seguridad: la regleta de alimentación tiene una calificación de protección de 720 Joules, un interruptor de circuito integrado para ayudar a proteger sus salidas de CA de sobrecarga y tecnología de apagado automático que detiene la alimentación a los dispositivos cuando expira la protección contra sobretensiones.', 300,'$745.00',ProteccionSobretension,'Iluminación');
  
  //Cables
  let cable1 = new Item(4,'CABLE INDIANA THW-LS/THHW-LS CALIBRE 12 NEGRO 100 M','Cable Indiana THW-LS/THHW-LS en calibre 12 color negro, formado por un cable de 19 hilos con aislamiento de policloruro de vinilo (PVC). Tiene la función de emplearse en instalaciones eléctricas para distintas construcciones.Cable Indiana THW-LS/THHW-LS de 100 metros, es un conductor de cobre sólido en calibre 12 color negro, formado por un cable de 19 hilos con aislamiento de policloruro de vinilo (PVC). Se desliza fácilmente para agilizar su instalación, cuenta con propiedades auto extinguibles que le permiten colocarse en superficies secas, mojadas o en aceite. Proporciona una resistencia de hasta 600 volts entre fases y temperaturas irregulares. Funciona en instalaciones eléctricas para distintas construcciones. Incluye carrete para proporcionar un mejor manejo, evitando que este se enrede.',50,'974.28', Cable1,'Cables');
  let cable2 = new Item(5,'CABLE USO RUDO SJT 3 POLOS CALIBRE 14 NEGRO INDIANA','Cable calibre 14 Indiana, con dos conductores de cobre en temple suave flexible, formado por 41 hilos con aislamiento de policloruro de vinilo (PVC) tipo SJT en color negro. Para voltajes de hasta 300 volts entre fases y temperatura máxima de operación en servicio normal de 60°C. Aprobación NOM ANCE. Su venta por metro permite adquirir la cantidad necesaria para cumplir con las necesidades del trabajo a realizar.', 100,'$30.48',Cable2,'Cables');
  
  //Interruptores
  let interruptor1=new Item(6,'INTERRUPTOR TERMOMAGNETICO S/GAB. 1P 15A 240V QO115','Los interruptores termomagnéticos, sirven para desconectar y proteger contra sobrecargas y cortos circuitos. Soporta un gran número de operaciones de conexión y desconexión, lo que lo hace muy útil en el control manual de una instalación.',50, '$167.00',Interruptor1,'Interruptores');
  let interruptor2=new Item(7,'INTERRUPTOR TERMOMAGNÉTICO 1 POLO 20 AMPERES SQUARE D','Interruptor termomagnético de 1 polo 20 amperes (breaker) automático de acción rápida con protección contra sobrecarga y cortocircuito. Cuenta con indicador de disparo ante falla (VISI-TRIP).',50, '$129.00',Interruptor2,'Interruptores');

  let itemsSelected;
  if (props.location.state !==undefined) {
    if(props.location.state.category_name==='iluminacion')
    itemsSelected=[multicontactoPhilips,focoPhilips,protectorSobretensionPhilips];
    if(props.location.state.category_name==='cables'){
    itemsSelected=[cable1,cable2];
    }
    if(props.location.state.category_name==='interruptores')
    itemsSelected=[interruptor1,interruptor2];
  }
 
  else{
    itemsSelected=[multicontactoPhilips,focoPhilips,protectorSobretensionPhilips,interruptor1,interruptor2,cable1,cable2]
  }
  
  
  



  useEffect(() => {
    
    new Promise((cargarDatosSuccess, cargarDatosFailure) =>{
     
      setTimeout(()=>{
        cargarDatosSuccess(itemsSelected);
      }, 2000);

    }).then(resultado => setItems(resultado))
  }, []);


  if(items.length===0){
    return (
      <div>
       
      </div>
    );
  }
  else{
    
    return (
      <div>
        <ItemListContainer items={items}/>
      </div>
    );
  }
 
}

