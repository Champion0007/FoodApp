import "../styles/Home.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Features />
      <Testimonials />
      <Menu />
    </div>
  );
};

export default Home;