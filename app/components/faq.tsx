"use client"

import { useState } from "react";
import { montserrat } from "../fonts";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: "What types of mental health services does the Company provide?",
      details:
        "Company offers a wide range of mental health services tailored to individual needs, including therapy for anxiety, depression, trauma, stress management, couples counseling, and support for PTSD.",
    },
    {
      question: "How do I know if I need therapy or counseling?",
      details:
        "If you're feeling overwhelmed, emotionally stuck, or facing challenges that affect your daily life, therapy can help you regain clarity and balance.",
    },
    {
      question: "Does the company offer financing plans?",
      details:
        "We provide flexible payment options to make therapy accessible and affordable.",
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-20 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold mb-4">
        <i className="fa-solid fa-diamond"></i>
        <p className={montserrat.className}>FAQ</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className={`${montserrat.className} text-sm text-gray-600 max-w-md`}>
          Discover care that fits your needs and supports your growth every step of the way.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "bg-[#f9f3ee5d] border-[#aaa39c]"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-lg md:text-xl text-gray-900">
                    {item.question}
                  </h3>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p
                      className={`${montserrat.className} overflow-hidden text-sm text-gray-600`}
                    >
                      {item.details}
                    </p>
                  </div>
                </div>

                <span className="text-xl text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
