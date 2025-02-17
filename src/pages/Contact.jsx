import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-subtitle">
          We'd love to hear from you! Reach out to us for any questions,
          feedback, or inquiries.
        </p>
      </div>

      {/* Contact Form and Details Section */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2 className="contact-details-title">Our Contact Information</h2>
          <div className="contact-details-item">
            <h3 className="contact-details-item-title">Address</h3>
            <p className="contact-details-item-description">
              123 Foodie Street, Cityville, Country
            </p>
          </div>
          <div className="contact-details-item">
            <h3 className="contact-details-item-title">Phone</h3>
            <p className="contact-details-item-description">+123 456 7890</p>
          </div>
          <div className="contact-details-item">
            <h3 className="contact-details-item-title">Email</h3>
            <p className="contact-details-item-description">
              info@foodie.com
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="contact-map">
        <iframe
          title="Foodie Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4b1a3e!2sFoodie%20Restaurant!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;