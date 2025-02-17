import "../styles/Menu.css";

const Menu = () => {
  const dishes = [
    { id: 1, name: "Margherita Pizza", description: "Classic pizza with fresh mozzarella, tomatoes, and basil.", price: "$18.99", image: "src/assets/Margherita-pizza-2021-3-e1614881538289.jpg" },
    { id: 2, name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta, eggs, and parmesan cheese.", price: "$14.99", image: "src/assets/Quick-And-Easy-Spaghetti-With-Blistered-Cherry-Tomato-Sauce3.jpg" },
    { id: 3, name: "Grilled Salmon", description: "Freshly grilled salmon with a side of seasonal vegetables.", price: "$18.99", image: "src/assets/pcc-rosemary-grilled-salmon-flo.jpg" },
  ];

  return (
    <section className="menu" id="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="menu-card">
            <img src={dish.image} alt={dish.name} className="menu-image" />
            <div className="menu-details">
              <h3 className="menu-dish-name">{dish.name}</h3>
              <p className="menu-dish-description">{dish.description}</p>
              <p className="menu-dish-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;