import React from "react";
import styles from "./Events.module.css";
import eventImg from "../sections/haal.jpg"; // Adjust the path as necessary

const Events = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Unforgettable Events Await</h1>
                    <p className={styles.description}>
                        Discover the perfect venue for your next celebration. Our halls are designed to make your events memorable, with top-notch amenities and a vibrant atmosphere.
                    </p>
                    <a
                        href="https://eventback2.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cta}
                    >
                        Book Now
                    </a>
                </div>
                <div className={styles.right}>
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
