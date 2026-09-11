import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="services reveal" id="services" aria-labelledby="what-we-do">
      <h2 id="what-we-do">What we do</h2>

      <div className="card-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
