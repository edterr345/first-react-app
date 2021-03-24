import Item from "../Item/Item"

import ItemDetailContainer from '../Item/ItemDetailContainer.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import React, { useEffect, useState } from 'react'
const ItemList = (props) => {
    return(
    <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
            {props.items.map((x, index)=>(
                <Item key={index} item={x} />
            ))} 
        </div>
        <Switch>
          <Route path="/item/:id" children={<Child_item items={props.items}/>} />
        </Switch>
    </div>)
};


function Child_item(props) {
    
    let { id } = useParams();
    alert.log("Hola");
    var result = props.items.filter(obj => {
        return obj.id === id
      })
     
    return (
        <GetItems item={result}/>);
  }

  
function GetItems(props){

    const [itemDetails, setItemDetails] = useState([]);
    
  
  
    var descripcion;
    descripcion='Power Station – Alimenta y protege 4 dispositivos electrónicos y 2 dispositivos portátiles con el protector de sobretensión de 4 salidas Philips con 2 puertos USB'+
    'Cable de diseño: alimenta tus dispositivos electrónicos con el elegante cable trenzado sin enredos de 1,2 m.'+
    'Enchufe plano: el diseño del enchufe plano ahorra espacio es discreto, al tiempo que también te deja más espacio para muebles o soportes'+
    'Seguridad: la regleta de alimentación tiene una calificación de protección de 720 Joules, un interruptor de circuito integrado para ayudar a proteger sus salidas de CA de sobrecarga y tecnología de apagado automático que detiene la alimentación a los dispositivos cuando expira la protección contra sobretensiones.';
    if(props.item.id===2)  
    descripcion='ILUMINACION LED: Disfruta de los ahorros de energia y durabilidad que garantiza Philips LED.\n'+
    'LUZ CÁLIDA: Ideal para ambientes acogedores, como una recámara o sala de estár.\n'+
    'LARGA DURACIÓN: Una vida de aproximadamente 15,000 horas (o 15 años).\n'+
    'SIN PARPADEO: La tecnología LED de Philips busca lo mejor para tus ojos. Cuentan con parámetros de alta calidad que aseguran que su iluminación siempre va a ser la más comoda para ti y tu familia.';
    if(props.item.id===1)  
    descripcion='Space Saving – This low-profile surge protector outlet adapter is designed for tight spaces and expands your normal wall outlet into a charging station with two outlets and two USB charging ports'+
  'Charging Hub – Delivers 2. 1 Amps of power to rapidly charge your phone, tablet, MP3 player, smart watch and more'+
  'Easy Install – Plug this outlet adapted into your standard outlet at home or in the office to get more from your power outlet'+
  'Power – This wall tap is rated for 15A/125VAC/1875W, ETL certified';
    
    
    const especificaciones="Estas son las especificaciones"
    const categoria="Iluminación"
  
    props.item.descripcion=descripcion;
    props.item.especificaciones=especificaciones;
    props.item.categoria=categoria;
  
  
    useEffect(() => {
      
      new Promise((cargarDatosSuccess, cargarDatosFailure) =>{
       
        setTimeout(()=>{
          cargarDatosSuccess(props.item);
        }, 3000);
  
      }).then(resultado => setItemDetails(resultado))
    }, [props]);
    return (
      <div>
        <ItemDetailContainer itemDetails={itemDetails}/>
      </div>
    );
  }

  export default ItemList;
