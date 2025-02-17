import "../styles/Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "John Doe", rating: 5, comment: "Amazing food and service!" },
    { name: "Jane Smith", rating: 4, comment: "Great experience!" },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">{"⭐".repeat(review.rating)}</div>
            <p className="testimonial-comment">{review.comment}</p>
            <p className="testimonial-author">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;