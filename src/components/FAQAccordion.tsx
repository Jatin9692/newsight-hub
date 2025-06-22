
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index}>
          <div 
            className="faq-question"
            onClick={() => toggleItem(index)}
          >
            <span>{faq.question}</span>
            <span className={`faq-arrow ${openItems.includes(index) ? 'rotated' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`faq-answer ${openItems.includes(index) ? 'active' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
