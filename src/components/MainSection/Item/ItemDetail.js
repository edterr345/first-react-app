import ItemCount from "../ItemCount";
import $ from 'jquery'
import React, { useEffect, useState } from 'react'


function ItemDetail (props) {
  let count=0;

  const [stockActual, setStockActual] = useState(props.itemDetails.stock);
  const restarStock= (e,nuevoStock) => {
    e.preventDefault();

    if(nuevoStock<=props.itemDetails.stock){
      $( "#botona"+props.itemDetails.id ).addClass( "d-none" );
      $( "#botons"+props.itemDetails.id ).removeClass( "d-none" );
      $("#cantidad"+props.itemDetails.id).attr('disabled', 'disabled');
    }
      var cant=$("#badge1").text();
      $( "#botonc"+props.itemDetails.id ).removeClass( "d-none" );
     
       

    if((stockActual-nuevoStock)>=0){
     
      var nueva_cant=parseInt(nuevoStock) + parseInt(cant);
     
      $("#badge1").text(nueva_cant);
      $("#badge").text(nueva_cant);
      setStockActual((stockActual)=> stockActual-nuevoStock);
    }
  };

  const sumarStock= (e,nuevoStock) => {
    e.preventDefault();
    var cant=$("#badge1").text();


    $( "#botona"+props.itemDetails.id ).removeClass( "d-none" );
    $( "#botons"+props.itemDetails.id ).addClass( "d-none" );
    $("#cantidad"+props.itemDetails.id).removeAttr('disabled');
    
      
    if((parseInt(nuevoStock) + parseInt(stockActual))<=props.itemDetails.stock){
     
      var nueva_cant=parseInt(cant) - parseInt(nuevoStock) ;
      if(parseInt(nueva_cant)===0)
      $( "#botonc"+props.itemDetails.id ).addClass( "d-none" );
      $("#badge1").text(nueva_cant);
      $("#badge").text(nueva_cant);
      setStockActual((stockActual)=> parseInt(nuevoStock) + parseInt(stockActual));
    }
  };


    var htmlstr=props.itemDetails.descripcion;

    return (
<main className="container">
{/* Left Column / Product Image */}
<div className="left-column">
  <img src={props.itemDetails.imagen} alt="" />
</div>
{/* Right Column */}
<div className="right-column">
  {/* Product Description */}
  <div className="product-description">
    <span>{props.itemDetails.categoria}</span>
    <h1>{props.itemDetails.nombre}</h1>
   
    <p>{htmlstr}</p>
  </div>
  {/* Product Configuration */}
  <div className="product-configuration">
    {/* Cable Configuration */}
    <div className="cable-config">
      <span>Configuración</span>
      <div className="cable-choose">
        <button>3.5 w</button>
        <button>4 W</button>
        <button>5.5 W</button>
      </div>
    {/* <a href="/#">Cómo configurarlo</a>*/}
    </div>
  </div>
  {/* Product Pricing */}
  <div className="product-price">
    <span>{props.itemDetails.precio}</span>
   
  </div>
  <ItemCount stock={stockActual} initial={1} onAdd={restarStock} onSubtract={sumarStock} id={props.itemDetails.id}/>
    
</div>
</main>
);
};

export default ItemDetail;