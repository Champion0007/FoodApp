import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-hero-title">About Us</h1>
        <p className="about-hero-subtitle">
          Discover the story behind our passion for food and our commitment to
          delivering the best dining experience.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="about-mission">
        <h2 className="about-mission-title">Our Mission</h2>
        <p className="about-mission-description">
          At Foodie, our mission is to provide fresh, delicious, and
          high-quality meals that bring people together. We believe in the power
          of food to create memorable experiences and foster connections.
        </p>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h2 className="about-team-title">Meet Our Team</h2>
        <div className="about-team-grid">
          {/* Team Member 1 */}
          <div className="about-team-member">
            <img
              src="src/assets/portrait-pretty-girl-with-bun-denim-jacket-white-t-shirt-with-gentle-smile-pink_176532-13857.jpg" // Replace with your image path
              alt="Team Member 1"
              className="about-team-member-image"
            />
            <h3 className="about-team-member-name">John Doe</h3>
            <p className="about-team-member-role">Head Chef</p>
          </div>

          {/* Team Member 2 */}
          <div className="about-team-member">
            <img
              src="src\assets\chef-working-together-professional-kitchen_23-2149728025.jpg" // Replace with your image path
              alt="Team Member 2"
              className="about-team-member-image"
            />
            <h3 className="about-team-member-name">Jane Smith</h3>
            <p className="about-team-member-role">Marketing Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="about-team-member">
            <img
              src="src\assets\close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger_176532-7923.avif" // Replace with your image path
              alt="Team Member 3"
              className="about-team-member-image"
            />
            <h3 className="about-team-member-name">Mike Johnson</h3>
            <p className="about-team-member-role">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="about-cta">
        <h2 className="about-cta-title">Join Us on Our Journey</h2>
        <p className="about-cta-description">
          Whether you're dining in, ordering delivery, or catering an event, we
          invite you to be a part of the Foodie family.
        </p>
        <button className="about-cta-button">Explore Our Menu</button>
      </div>
    </section>
  );
};

export default About;