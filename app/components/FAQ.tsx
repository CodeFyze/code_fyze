"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((i) => i !== index)); 
    } else {
      setOpen([...open, index]); 
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We provide IT solutions for a wide range of industries, including healthcare, finance, e-commerce, manufacturing, and more. Our team has the expertise to adapt to the unique needs of any sector.",
    },
    {
      question: "Can I customize a service bundle?",
      answer: "Yes, we offer flexible service bundles to meet your specific business needs.",
    },
    {
      question: "How do you protect data?",
      answer: "We use advanced encryption, firewalls, and regular security audits to protect your data.",
    },
    {
      question: "How do you ensure data security?",
      answer: "Our team implements best practices, including secure coding and regular vulnerability assessments, to ensure your data remains secure.",
    },
  ];

  return (
    <div className="bg-gray-100 border py-10 px-6 sm:px-12 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-8">
        Everything You Need to Know About Our IT Services
      </p>
      <div className="space-y-4 border rounded-md border-black">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left px-4 py-3 sm:py-4 font-bold text-blue-600 text-lg sm:text-xl focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  open.includes(index) ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                open.includes(index) ? "max-h-screen" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="px-4 py-3 sm:py-4 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
