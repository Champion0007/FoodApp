import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero dark:bg-gray-800" id="hero">
      <div className="hero-content">
        <h1 className="hero-title dark:text-white">Delicious Food, Delivered to You</h1>
        <p className="hero-subtitle dark:text-gray-300">Order now and enjoy the best meals in town!</p>
        <button className="hero-button dark:bg-orange-600">Order Now</button>
      </div>
    </section>
  );
};

export default Hero;