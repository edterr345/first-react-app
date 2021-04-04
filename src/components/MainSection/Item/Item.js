import React, { useEffect, useState } from 'react'
import {
  Link,
} from "react-router-dom";

function Item (props) {
    
  
  
    
    const classIm="card-img img-fluid im"+props.item.id;
    return (    
      
    <div className="col-md-4 mt-2">
    <div className="card">
      <div className="card-body">
        <div className="card-img-actions"> <img src={props.item.imagen} className={classIm} width={96} height={350} alt="" /> </div>
      </div>
      <div className="card-body bg-light text-center">
        <div className="mb-2">
          <h6 className="font-weight-semibold mb-2"> <a href="/#" className="text-default mb-2" data-abc="true">{props.item.nombre}</a> </h6> <a href="/#" className="text-muted" data-abc="true">{props.item.categoria}</a>
        </div>
        <h3 className="mb-0 font-weight-semibold">{props.item.precio}</h3>
        <div> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> <i className="fa fa-star star" /> </div>
        <div className="text-muted mb-3">34 reviews</div> 
       <GetItems item={props.item}/>
      </div>
    </div>
  </div>
    );
};


function GetItems(props){

  const [itemDetails, setItemDetails] = useState({});
  


  
  
  
  const especificaciones="Estas son las especificaciones"


  //props.item.descripcion=descripcion;
  props.item.especificaciones=especificaciones;
 


  useEffect(() => {
    
    new Promise((cargarDatosSuccess, cargarDatosFailure) =>{
     
      setTimeout(()=>{
        cargarDatosSuccess(props.item);
      }, 3000);

    }).then(resultado => setItemDetails(resultado))
  }, [props.item]);

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