import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const slides = [
    {
        image: "/assets/slide1.jpg",
        title: "Welcome to the Party",
        text: "Experience unforgettable moments under our premium party tents.", 
        // text2: "This is a large hall of about 3,000 seat capacity with all basic and luxary hall features",
        button: "Book Now",
    },
    {
        image: "/assets/slide2.jpg",
        title: "Elegant & Spacious",
        text: "Our tents provide the perfect setting for any celebration.",
        button: "See Gallery",
    },
    {
        image: "/assets/slide3.jpg",
        title: "Make Memories",
        text: "Create lasting memories with friends and family",
        button: "Contact Us",
    },
];

const SLIDE_INTERVAL = 5000;

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <section className={styles.hero}>
            <div className={styles.slider}>
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.slide} ${idx === current ? styles.active : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className={styles.overlay}>
                            <h1 className={styles.title}>{slide.title}</h1>
                            <p className={styles.text}>{slide.text}</p>
                            <p className={styles.text2}>{slide.text2}</p>
                            <button className={styles.button}>{slide.button}</button>
                        </div>
                    </div>
                ))}
                <div className={styles.dots}>
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;