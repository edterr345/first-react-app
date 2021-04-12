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
import firebase from "./firebase";


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
        <GetItemsFireStore/>
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
  

function GetItemsFireStore(){
  
  useEffect(() => {
    const db =  firebase.firestore();
    const itemsCollection = db.collection("items");

    itemsCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        }

        resp.docs.map((c) => console.log({ id: c.id, ...c.data() }));
      })
      .catch((error) => console.log(error));
  }, []);

  return (<div></div>);

}


function CategoriesSetting(){
  
  const [categories, setCategories] = useState([]);


  //let iluminacion = new Categoria(1,'iluminacion','descripcion',<i className="fa fa-lightbulb" />);
  //let cables = new Categoria(2,'cables','descripcion',<i className="fa fa-plug" />);
  //let interruptores= new Categoria(3,'interruptores','descripcion',<i className="fa fa-toggle-on" />);
  
  useEffect(() => {
    const db =  firebase.firestore();
    const categoriasCollection = db.collection("categories");

    categoriasCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        }
        const categorias = []
      
        var i=0;
        resp.forEach(categoria => {
          categorias[i]={ id: categoria.id,icon: null, ...categoria.data() };
          console.log(categorias);
          categorias[i].icon=<i className={categorias[i].icono} />
          i=i+1     
        })

        
        setCategories(categorias)
        //resp.docs.map((c) => console.log({ id: c.id, ...c.data() }));
      })
      .catch((error) => console.log(error));
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
 
  //Interruptores
  //let interruptor1=new Item(6,'INTERRUPTOR TERMOMAGNETICO S/GAB. 1P 15A 240V QO115','Los interruptores termomagnéticos, sirven para desconectar y proteger contra sobrecargas y cortos circuitos. Soporta un gran número de operaciones de conexión y desconexión, lo que lo hace muy útil en el control manual de una instalación.',50, '$167.00',Interruptor1,'Interruptores');
  //let interruptor2=new Item(7,'INTERRUPTOR TERMOMAGNÉTICO 1 POLO 20 AMPERES SQUARE D','Interruptor termomagnético de 1 polo 20 amperes (breaker) automático de acción rápida con protección contra sobrecarga y cortocircuito. Cuenta con indicador de disparo ante falla (VISI-TRIP).',50, '$129.00',Interruptor2,'Interruptores');

var categoria_a_buscar="";
  if (props.location.state !==undefined) {
    categoria_a_buscar=props.location.state.category_name;
  }
  
 
  
  useEffect(() => {
    const db =  firebase.firestore();
    const itemsCollection = db.collection("items");
if(categoria_a_buscar!=="")
    itemsCollection
      .where("categoria", "==", categoria_a_buscar)
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        }
        const items = []
        var i=0;
        resp.forEach(item => {
          items[i]={ id: item.id, imagen: "", ...item.data() };
          var imagen=require(`./assets/${items[i].imagen_nombre}`).default;
          items[i].imagen=imagen;
          i=i+1     
        })
        setItems(items)
        //resp.docs.map((c) => console.log({ id: c.id, ...c.data() }));
      })
      .catch((error) => console.log(error));

      else
      itemsCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Sin datos");
        }
        const items = []
        var i=0;
        resp.forEach(item => {
          items[i]={ id: item.id, imagen: "", ...item.data() };
          var imagen=require(`./assets/${items[i].imagen_nombre}`).default;
          items[i].imagen=imagen;
          i=i+1     
        })
        setItems(items)
        //resp.docs.map((c) => console.log({ id: c.id, ...c.data() }));
      })
      .catch((error) => console.log(error));



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

