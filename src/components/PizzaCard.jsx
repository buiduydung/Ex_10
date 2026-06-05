function PizzaCard({ name, oldPrice, newPrice, image, sale }) {
  return (
    <div className="pizza-card">
      <div className="image-box">
        {sale && <span className="sale-badge">SALE</span>}
        <img src={image} alt={name} />
      </div>

      <div className="pizza-info">
        <h5>{name}</h5>

        <p>
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{newPrice}</span>
        </p>

        <button>Buy</button>
      </div>
    </div>
  );
}

export default PizzaCard;
