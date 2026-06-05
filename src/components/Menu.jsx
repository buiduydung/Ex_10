import PizzaCard from "./PizzaCard";

function Menu() {
  const pizzas = [
    {
      name: "Margherita Pizza",
      oldPrice: "$20.00",
      newPrice: "$14.00",
      image: "/images/pizza_1.png",
      sale: true,
    },
    {
      name: "Mushroom Pizza",
      oldPrice: "$22.00",
      newPrice: "$17.00",
      image: "/images/pizza_2.png",
      sale: false,
    },
    {
      name: "Hawaiian Pizza",
      oldPrice: "$19.00",
      newPrice: "$16.00",
      image: "/images/pizza_3.png",
      sale: true,
    },
    {
      name: "Pesto Pizza",
      oldPrice: "$23.00",
      newPrice: "$17.00",
      image: "/images/pizza_4.png",
      sale: true,
    },
  ];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {pizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            name={pizza.name}
            oldPrice={pizza.oldPrice}
            newPrice={pizza.newPrice}
            image={pizza.image}
            sale={pizza.sale}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
