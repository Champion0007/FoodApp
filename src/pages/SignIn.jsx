import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <section className="signin" id="signin">
      {/* Hero Section */}
      <div className="signin-hero">
        <h1 className="signin-hero-title">Sign In</h1>
        <p className="signin-hero-subtitle">
          Welcome back! Sign in to access your account and continue your food
          journey with us.
        </p>
      </div>

      {/* Sign In Form */}
      <div className="signin-form-container">
        <form className="signin-form">
          <input
            type="email"
            placeholder="Email"
            className="signin-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
          />
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <div className="signin-links">
          <a href="/forgot-password" className="signin-link">
            Forgot Password?
          </a>
          <p className="signin-text">
            Don't have an account? <a href="/signup" className="signin-link">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;