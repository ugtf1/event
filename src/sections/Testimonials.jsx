import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Jane Doe",
        text: "The party tent was amazing! It made our event unforgettable.",
        company: "Event Co."
    },
    {
        name: "John Smith",
        text: "Great service and high-quality tents. Highly recommended!",
        company: "Smith Events"
    },
    {
        name: "Emily Johnson",
        text: "Professional team and beautiful setup. Will book again.",
        company: "Johnson Weddings"
    }
];

const Testimonials = () => (
    <section className={styles.testimonialsSection}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        <div className={styles.testimonialsList}>
            {testimonials.map((testimonial, idx) => (
                <div className={styles.testimonialCard} key={idx}>
                    <p className={styles.text}>"{testimonial.text}"</p>
                    <div className={styles.author}>
                        <span className={styles.name}>{testimonial.name}</span>
                        <span className={styles.company}>{testimonial.company}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Testimonials;