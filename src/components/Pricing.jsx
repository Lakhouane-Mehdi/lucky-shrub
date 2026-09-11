import { pricing } from "../data/pricing";

export default function Pricing() {
  return (
    <section className="pricing reveal" id="pricing" aria-labelledby="pricing-title">
      <h2 id="pricing-title">What it costs</h2>
      <p className="section-intro">
        No hidden fees. Every quote is fixed before we start work.
      </p>

      <div className="price-grid">
        {pricing.map((plan) => (
          <article
            key={plan.id}
            className={`price-card ${plan.featured ? "is-featured" : ""}`}
          >
            {plan.featured && <span className="badge">Most popular</span>}

            <h3>{plan.name}</h3>

            <p className="price">
              {plan.price} <span className="unit">{plan.unit}</span>
            </p>

            <p className="price-summary">{plan.summary}</p>

            <ul className="features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a className="button" href="#contact">
              Get started
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
