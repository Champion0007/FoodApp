import { useDarkMode } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;