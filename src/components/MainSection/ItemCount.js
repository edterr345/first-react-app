import $ from 'jquery'
const ItemCount = ({stock, initial, onAdd}) => {
    return ( <form>
        Stock: {stock}
    <br/>
    <input id='cantidad' type="number" min="1" defaultValue={initial}></input>
    <br/><br/>
    <button onClick={(e) => onAdd(e,$('#cantidad').val())} type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2" /> Add to cart</button>
    </form>
    );
};

export default ItemCount;
