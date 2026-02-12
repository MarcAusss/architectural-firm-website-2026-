"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { montserrat } from "../fonts";

const testimonials = [
  {
    quote:
      "\"I struggled with accident-related \ntrauma for two years. Healora's program and \nincredible therapists guided me through the \nhealing process and helped me feel whole \nagain.\"",
    name: "Aaron Mitchell",
    location: "Florida, United States",
    image: "/images/blog-3-1024x682.jpg",
  },
  {
    quote:
      "Therapy helped me regain confidence \nand emotional strength after years of silent \nbattles. I finally feel balanced and \nhopeful again.",
    name: "Samantha Lee",
    location: "California, United States",
    image: "/images/blog-3-1024x682.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const current = testimonials[index];

  // Split once for performance
  const lines = useMemo(() => current.quote.split("\n"), [current]);

  return (
    <div className="py-20">
      {/* Top Label */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <span>♦</span>
        <p className={montserrat.className}>Testimonials</p>
      </div>

      {/* Title Row */}
      <div className="flex justify-between items-start mb-16">
        <h1 className="text-5xl font-serif leading-tight">
          Real Stories From Our Patients
        </h1>

        <p className={`${montserrat.className} text-sm text-gray-600 max-w-xs`}>
          Read heartfelt experiences shared by patients who found comfort,
          clarity, and support through our care.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-center gap-28">
        {/* LEFT IMAGE */}
        <div className="w-[28%] relative h-80 rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[62%] min-w-0">
          {/* Quote */}
          <h1 className="text-4xl font-serif leading-relaxed mb-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {lines.map((line, lineIndex) => {
                  const words = line.split(" ");
                  const half = Math.ceil(words.length / 2);

                  return (
                    <div
                      key={lineIndex}
                      className={lineIndex === 0 ? "ml-[10%]" : ""}
                    >
                      {words.map((word, i) => (
                        <motion.span
                          key={`${lineIndex}-${i}`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: i * 0.03,
                            duration: 0.4,
                          }}
                          className={`mr-1 ${
                            i < half ? "text-gray-900" : "text-gray-900"
                          }`}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>
                  );
                })}
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* Name + Arrows Row */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg">{current.name}</h1>
              <p className={`${montserrat.className} text-sm text-gray-500`}>
                {current.location}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <i className="fa-solid fa-arrow-left text-sm"></i>
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-[#4b2e2b] text-white flex items-center justify-center hover:opacity-80 transition"
              >
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
