import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="testimonials reveal"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title">What our clients say</h2>

      <div className="quote-grid">
        {testimonials.map((item) => (
          <figure key={item.id} className="quote">
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <figcaption>
              <span className="quote-name">{item.name}</span>
              <span className="quote-location">{item.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
