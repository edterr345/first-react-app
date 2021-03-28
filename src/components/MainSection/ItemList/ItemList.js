import Item from "../Item/Item"
import React from 'react'
const ItemList = (props) => {
    return(
    <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
            {props.items.map((x, index)=>(
                <Item key={index} item={x} />
            ))} 
        </div>
    </div>)
};

  export default ItemList;
