import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../common/SectionTitle.jsx";
import { faqs } from "../../data/siteData.js";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="section faq-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <SectionTitle
        eyebrow="INFORMASI"
        title="Pertanyaan yang sering diajukan"
        // description="Informasi awal untuk membantu kamu sebelum survei."
        id="faq-title"
      />
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          return (
            <article className="faq-item" key={faq.question}>
              <h3>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={isOpen ? "chevron rotated" : "chevron"}
                    size={20}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              {isOpen && (
                <p className="faq-answer" id={answerId}>
                  {faq.answer}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
