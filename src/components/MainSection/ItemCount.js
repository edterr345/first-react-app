import $ from 'jquery'
const ItemCount = ({stock, initial, onAdd,onSubtract,id}) => {
    var IdItem = '#cantidad' + id;
    return ( <form>
        Stock: {stock}
    <br/>
    <input id={"cantidad"+id} type="number" min="1" max={""+stock} defaultValue={initial}></input>
    <br/><br/>
    <button id={"botona"+id} className="btn bg-cart" onClick={(e) => onAdd(e,$(IdItem).val())} type="button" ><i className="fa fa-cart-plus mr-2" /> Add to cart</button>
    <button id={"botons"+id} className="btn bg-cart-1 d-none"  onClick={(e) => onSubtract(e,$(IdItem).val())} type="button" ><i className="fa fa-cart-arrow-down mr-2" /> Remove from cart</button>
    <br/><br/>
    
    <button id={"botonc"+id} className="btn bg-cart d-none" type="button" ><i className="fa fa-shopping-cart mr-2" /> Go to cart</button>
    
    {/*className="btn bg-cart"*/}
    </form>
    );
};

export default ItemCount;
