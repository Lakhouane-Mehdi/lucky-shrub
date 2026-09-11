import { useState } from "react";
import { faqs } from "../data/faqs";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section className="faq reveal" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Common questions</h2>

      <div className="faq-list">
        {faqs.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div className="faq-item" key={item.id}>
              <h3>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  id={`${item.id}-button`}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>

              <div
                className="faq-answer"
                id={`${item.id}-answer`}
                role="region"
                aria-labelledby={`${item.id}-button`}
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
