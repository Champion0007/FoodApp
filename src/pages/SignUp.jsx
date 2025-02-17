import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <section className="signup" id="signup">
      {/* Hero Section */}
      <div className="signup-hero">
        <h1 className="signup-hero-title">Sign Up</h1>
        <p className="signup-hero-subtitle">
          Join the Foodie family! Create an account to enjoy exclusive benefits
          and personalized experiences.
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="signup-form-container">
        <form className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* Additional Links */}
        <div className="signup-links">
          <p className="signup-text">
            Already have an account? <a href="/signin" className="signup-link">Sign In</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;