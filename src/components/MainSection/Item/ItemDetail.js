function ItemDetail (props) {
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
    <a href="/#" className="cart-btn">Add to cart</a>
  </div>
</div>
</main>
);
};

export default ItemDetail;