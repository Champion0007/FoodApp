import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      {/* Hero Section */}
      <div className="services-hero">
        <h1 className="services-hero-title">Our Services</h1>
        <p className="services-hero-subtitle">
          Explore the variety of services we offer to make your dining experience
          unforgettable.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="services-cards">
        {/* Delivery Service */}
        <div className="service-card">
          <img
            src="src\assets\way-concept-illustration_114360-1191.avif" // Replace with your image path
            alt="Delivery Service"
            className="service-card-image"
          />
          <h2 className="service-card-title">Food Delivery</h2>
          <p className="service-card-description">
            Enjoy your favorite meals from the comfort of your home. We offer fast
            and reliable delivery services to satisfy your cravings.
          </p>
        </div>

        {/* Dine-In Service */}
        <div className="service-card">
          <img
            src="src\assets\waiter-wearing-face-mask-serving_23-2148592573.jpg" // Replace with your image path
            alt="Dine-In Service"
            className="service-card-image"
          />
          <h2 className="service-card-title">Dine-In</h2>
          <p className="service-card-description">
            Experience the warmth of our restaurant with a cozy and inviting
            ambiance. Perfect for family dinners, dates, and special occasions.
          </p>
        </div>

        {/* Catering Service */}
        <div className="service-card">
          <img
            src="src\assets\waiters-concept-illustration_114360-2782.jpg" // Replace with your image path
            alt="Catering Service"
            className="service-card-image"
          />
          <h2 className="service-card-title">Catering</h2>
          <p className="service-card-description">
            Make your events memorable with our catering services. We provide
            delicious meals tailored to your preferences and needs.
          </p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="services-info">
        <h2 className="services-info-title">Why Choose Us?</h2>
        <p className="services-info-description">
          At Foodie, we are committed to providing exceptional service and
          high-quality meals. Here’s what sets us apart:
        </p>
        <ul className="services-info-list">
          <li className="services-info-item">
            <strong>Fresh Ingredients:</strong> We use only the freshest and
            finest ingredients in every dish.
          </li>
          <li className="services-info-item">
            <strong>Experienced Chefs:</strong> Our team of skilled chefs brings
            creativity and passion to every meal.
          </li>
          <li className="services-info-item">
            <strong>Customer Satisfaction:</strong> Your satisfaction is our top
            priority. We go above and beyond to meet your expectations.
          </li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="services-cta">
        <h2 className="services-cta-title">Ready to Order?</h2>
        <p className="services-cta-description">
          Whether you're craving a quick bite or planning a large event, we've got
          you covered. Explore our menu and place your order today!
        </p>
        <button className="services-cta-button">View Menu</button>
      </div>
    </section>
  );
};

export default Services;