import React from "react";
import styles from "./Testimonials.module.css";
import eventImg from "../sections/slide1.png"; // Adjust the path as necessary

const Events = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.right}>
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.description}>
                        You can book directly through the site or reach out via the Contact Us section to inquire about availability, customization options, or special packages. Would you like help drafting a message to inquire or book a hall? Or maybe explore ideas for decorating one of these venues?                    </p>
                    <button className={styles.cta}>Read More</button>
                </div>
                <div className={styles.left}>
                    <img
                        src={eventImg}
                        alt="Event Hall"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default Events;