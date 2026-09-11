import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function validate() {
    const found = {};
    if (!form.name.trim()) found.name = "Please tell us your name.";
    if (!form.email.includes("@")) found.email = "Please enter a valid email.";
    if (form.message.trim().length < 10)
      found.message = "Please give us a little more detail (10+ characters).";
    return found;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const found = validate();
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section className="contact reveal" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Book a consultation</h2>

      {sent && (
        <p className="success" role="status">
          Thanks — we&rsquo;ll be in touch within two working days.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className="error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className="error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">What can we help with?</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className="error" id="message-error">
              {errors.message}
            </span>
          )}
        </div>

        <button className="button" type="submit">
          Send request
        </button>
      </form>
    </section>
  );
}
