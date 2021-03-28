import $ from 'jquery'
import ItemCount from "../ItemCount.js"
import ItemDetailContainer from './ItemDetailContainer.js';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Item (props) {
    
  
    const [stockActual, setStockActual] = useState(props.item.stock);
    const restarStock= (e,nuevoStock) => {
      e.preventDefault();
      console.log(nuevoStock);
      if((stockActual-nuevoStock)>=0){
        var cant=$("#badge").text();
        var nueva_cant=parseInt(nuevoStock) + parseInt(cant);
       
        $("#badge").text(nueva_cant);
        $("#badge1").text(nueva_cant);
        setStockActual((stockActual)=> stockActual-nuevoStock);
      }
    };
    
    const classIm="card-img img-fluid im"+props.item.id;
    return (    
      
    <div className="col-md-4 mt-2">
    <div className="card">
      <div className="card-body">
        <div className="card-img-actions"> <img src={props.item.imagen} className={classIm} width={96} height={350} alt="" /> </div>
      </div>
      <div className="card-body bg-light text-center">
        <div className="mb-2">
          <h6 className="font-weight-semibold mb-2"> <a href="/#" className="text-default mb-2" data-abc="true">{props.item.nombre}</a> </h6> <a href="/#" className="text-muted" data-abc="true">Iluminación</a>
        </div>
        <h3 className="mb-0 font-weight-semibold">{props.item.precio}</h3>
        <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
        <div className="text-muted mb-3">34 reviews</div> <ItemCount stock={stockActual} initial={1} onAdd={restarStock} id={props.item.id}/>
       <GetItems item={props.item}/>
      </div>
    </div>
  </div>
    );
};


function GetItems(props){

  const [itemDetails, setItemDetails] = useState({});
  


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
  }, []);

  if(Object.entries(itemDetails).length === 0){
    return (
      <div>
       
      </div>
    );
  }
  else{
  return (
    <div>

        <Link to={{
          pathname: `/item/${itemDetails.id}`,
          state: { itemDetails: itemDetails }
        }}>
    <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 font-bold hover:bg-indigo-500">Ver detalle</button>
    </Link>
      {/*<ItemDetailContainer itemDetails={itemDetails}/> */}
    </div>
  );
  }
}




export default Item;