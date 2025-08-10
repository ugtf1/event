import React, { useState, useEffect } from "react";
import "./Testimonialss.module.css";

const TESTIMONIALS = [
  {
    name: "Sophia Brown",
    text: "Working with this team transformed our online presence. Their creative strategy and attention to detail were second to none!",
  },
  {
    name: "Liam Smith",
    text: "Fantastic service from start to finish. They helped us exceed our goals and kept us in the loop the entire time.",
  },
  {
    name: "Emma Davis",
    text: "Absolutely brilliant execution. The results speak for themselves—revenue is up 30% this quarter!",
  },
  {
    name: "Noah Johnson",
    text: "I’ve never met a more professional, insightful, and dedicated group. Highly recommend to anyone looking to grow.",
  },
  {
    name: "Olivia Wilson",
    text: "Their attention to our needs and speedy delivery made all the difference. We’ll be back for more!",
  },
  {
    name: "Ethan Martinez",
    text: "Cutting-edge ideas, flawless implementation. Our brand has never looked better, and the traffic keeps pouring in.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Determine which two to show
  const first = TESTIMONIALS[startIndex];
  const second = TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length];

  return (
    <div className="testimonials-container">
      {[first, second].map((t, idx) => (
        <div key={idx} className="testimonial-card">
          <p className="testimonial-text">“{t.text}”</p>
          <p className="testimonial-name">— {t.name}</p>
        </div>
      ))}
    </div>
  );
}
