import { useState } from 'react';
import $ from 'jquery'
import ItemCount from "../ItemCount.js"
import { render } from '@testing-library/react';
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
      </div>
    </div>
  </div>
    );
};



export default Item;