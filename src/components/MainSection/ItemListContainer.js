import React from "react"
import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList.js"


function ItemListContainer (props) {
  return ( 
    <div >
     {/* <Alert severity="success" color="info">
            {props.saludo}
          </Alert>
      */}
    <div>
      <ItemList items={props.items} />
    </div>
  </div>
    
  );
}
export default ItemListContainer