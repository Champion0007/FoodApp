import "../styles/Features.css";

const Features = () => {
  const features = [
    { icon: "🍕", title: "Fresh Ingredients", description: "We use only the freshest ingredients." },
    { icon: "🚚", title: "Fast Delivery", description: "Get your food delivered in under 30 minutes." },
    { icon: "🍴", title: "Dine-In", description: "Enjoy a cozy dining experience." },
  ];

  return (
    <section className="features" id="features">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;