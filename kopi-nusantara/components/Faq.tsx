'use client';
import { useState } from 'react';
import { faqItems } from '@/data/menu';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <h2 className="heading">Pertanyaan yang Sering Diajukan</h2>
      <p className="subheading">Beberapa hal yang paling sering ditanyakan pelanggan kami.</p>

      <div className="faq-container">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className="faq-box" key={i}>
              <h3
                className={`faq-question ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.q}
              </h3>
              <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}