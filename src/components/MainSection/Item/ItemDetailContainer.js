import React from 'react';
import './ItemDetail.css';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = (props) => {
  
  
    return (
    
      <div >
        <div className="pt-16 w-full">
          <div className="flex justify-center flex-wrap">
            <ItemDetail itemDetails={props.location.state.itemDetails}/>
          </div>
        </div>
     </div>
     );



  
};
  
    export default ItemDetailContainer;
