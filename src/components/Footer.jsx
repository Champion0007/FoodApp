import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer dark:bg-gray-800" id="footer">
      <div className="footer-container">
        <p className="dark:text-white">&copy; 2023 Foodie. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link dark:text-white">Privacy Policy</a>
          <a href="/terms" className="footer-link dark:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;