"use client"

import { useState } from "react";
import { montserrat  } from "../fonts";

export default function Faq() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const items = [
        {
        question: "What types of mental health services does the Company provide?",
        details:
            "Company offers a wide range of mental health services tailored to individual needs, This includes therapy for anxiety, depression, trauma, stress management, couples counseling, and support for PTSD. Our team consists of licensed therapist, psychologists, and counselors who are trained to provide evidence-based care in a compassionate and safe environment.",
        },
        {
        question: "How do i know if I need therapy or counseling?",
        details:
            "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient performance automatically.",
        },
        {
        question: "Does Greenova offer financing or installment plans?",
        details:
            "Integrates smoothly with existing infrastructure and smart devices for effortless adoption.",
        },
        {
        question: "What maintenance do solar panels require?",
        details:
            "Advanced battery systems ensure optimal energy storage during peak and off-peak hours.",
        },
        {
        question: "Do i need a roof inspection before installing solar panels?",
        details:
            "Connects users into a shared renewable ecosystem that maximizes collective efficiency.",
        },
    ];
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>FAQ</p>
            </div>
            <div className="flex justify-between items-end">
                <h1 className="text-4xl">Frequently Asked Questions</h1>
                <p className={`${montserrat.className}`}>Discover care that fits your needs, connects you <br /> with the right professional, and supports your <br /> growth every step of the way.</p>
            </div>        
            
            <div className=" mt-10">
                <div className="w-full">
                    <div className="space-y-3">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                        <div
                            key={index}
                            className={`
                            rounded-xl border transition-all duration-300
                            ${isOpen
                                ? "bg-[#f9f3ee5d] border-[#aaa39c]"
                                : "bg-white border-gray-200"}
                            `}
                        >
                            <button
                            onClick={() =>
                                setOpenIndex(isOpen ? null : index)
                            }
                            className="w-full flex items-start gap-4 p-4 text-left"
                            >

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="font-medium text-xl text-gray-900">
                                {item.question}
                                </h3>

                                <div
                                className={`grid transition-all duration-300 ${
                                    isOpen
                                    ? "grid-rows-[1fr] mt-2"
                                    : "grid-rows-[0fr]"
                                }`}
                                >
                                <p className={`${montserrat.className} overflow-hidden text-sm w-[90%] text-gray-600`}>
                                    {item.details}
                                </p>
                                </div>
                            </div>

                            {/* Plus / Minus */}
                            <span className="text-lg text-gray-500">
                                {isOpen ? "−" : "+"}
                            </span>
                            </button>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}