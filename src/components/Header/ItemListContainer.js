import React from "react"
import "./ItemListContainer.scss"
import ProteccionSobretension from "../../assets/images/ProteccionSobretension.jpg"
import FocoLED from "../../assets/images/Foco-LED.png"
import contactoPhilips from "../../assets/images/contacto-Philips.webp"
import Alert from '@material-ui/lab/Alert';

function ItemListContainer (props) {
  
  return ( 
    
    <div className="container1">
        <div className="shopping-cart">
          <Alert severity="success" color="info">
            {props.saludo}
          </Alert>
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon" /><span id="badge" className="badge">0</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$1880.48</span>
            </div>
          </div> {/*end shopping-cart-header */}
          <ul className="shopping-cart-items">
            <li className="clearfix">
              <img className="img01" src={contactoPhilips} alt="item1" />
              <span className="item-name">MULTICONTACTO PHILIPS SPS6222WB/37</span>
              <span className="item-price">$1100.99</span>
              <span className="item-quantity">Quantity: 03</span>
            </li>
            <li className="clearfix">
              <img className="img02" src={ProteccionSobretension} alt="item1" />
              <span className="item-name">PHILIPS SPC6244WC/37 - Protector de sobretensión ...</span>
              <p id="PS-price"><span  className="item-price">$744.99</span></p>
              <p id="PS-quantity"><span className="item-quantity">Quantity: 01</span></p>
            </li>
            <li className="clearfix">
              <img className="img03" src={FocoLED} alt="item1" />
              <span className="item-name">Foco Philips LEDBulb - 5.5W- A19 </span>
              <span className="item-price">$34.50</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
          </ul>
          <a href="/#" className="button">Checkout</a>
        </div>
</div>
);
}
      export default ItemListContainer