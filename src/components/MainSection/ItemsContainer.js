import React from "react"
import "./ItemsContainer.css"
import ProteccionSobretension from "../../assets/images/ProteccionSobretension.jpg"
import FocoLED from "../../assets/images/Foco-LED.png"
import contactoPhilips from "../../assets/images/contacto-Philips.webp"
import Alert from '@material-ui/lab/Alert';
import ItemCount from "./ItemCount.js"
import { useState } from 'react';
import $ from 'jquery'

function ItemsContainer (props) {
  const [stockActual, setStockActual] = useState(5);
  const restarStock= (e,nuevoStock) => {
    e.preventDefault();
    
    if((stockActual-nuevoStock)>=0){
      var cant=$("#badge").text();

      var nueva_cant=parseInt(nuevoStock) + parseInt(cant);
      console.log(nueva_cant);
      $("#badge").text(nueva_cant);
      $("#badge1").text(nueva_cant);
      setStockActual((stockActual)=> stockActual-nuevoStock);
    }
  }

  return ( 
    <div >
      <Alert severity="success" color="info">
        {props.saludo}
      </Alert>
    <div className="container d-flex justify-content-center mt-50 mb-50">
      
    <div className="row">
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions"> <img src={contactoPhilips} className="card-img img-fluid im1" width={96} height={350} alt="" /> </div>
          </div>
          <div className="card-body bg-light text-center">
            <div className="mb-2">
              <h6 className="font-weight-semibold mb-2"> <a href="/#" className="text-default mb-2" data-abc="true">MULTICONTACTO PHILIPS SPS6222WB/37</a> </h6> <a href="/#" className="text-muted" data-abc="true">Iluminación</a>
            </div>
            <h3 className="mb-0 font-weight-semibold">$400.00</h3>
            <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
            <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2" /> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions"> <img src={FocoLED} className="card-img img-fluid" width={96} height={350} alt="" /> </div>
          </div>
          <div className="card-body bg-light text-center">
            <div className="mb-2">
              <h6 className="font-weight-semibold mb-2"> <a href="/#" className="text-default mb-2" data-abc="true">Foco Philips LEDBulb - 5.5W- A19 </a> </h6> <a href="/#" className="text-muted" data-abc="true">Iluminación</a>
            </div>
            <h3 className="mb-0 font-weight-semibold">$34.50</h3>
            <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
            <div className="text-muted mb-3">34 reviews</div> <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2" /> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions"> <img src={ProteccionSobretension} className="card-img img-fluid" width={96} height={350} alt="" /> </div>
          </div>
          <div className="card-body bg-light text-center">
            <div className="mb-2">
              <h6 className="font-weight-semibold mb-2"> <a href="/#" className="text-default mb-2" data-abc="true">PHILIPS SPC6244WC/37 - Protector de sobretensión ...</a> </h6> <a href="/#" className="text-muted" data-abc="true">Iluminación</a>
            </div>
            <h3 className="mb-0 font-weight-semibold">$744.99</h3>
            <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
            <div className="text-muted mb-3">34 reviews</div><ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
      export default ItemsContainer