import React from "react";
import styles from "./Events.module.css";

const Events = () => {
    return (
        <section className={styles.eventsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Upcoming Events</h2>
                <ul className={styles.eventList}>
                    <li className={styles.eventItem}>
                        <span className={styles.eventDate}>June 15, 2024</span>
                        <span className={styles.eventName}>Summer Party</span>
                    </li>
                    <li className={styles.eventItem}>
                        <span className={styles.eventDate}>July 20, 2024</span>
                        <span className={styles.eventName}>Beach Gathering</span>
                    </li>
                    <li className={styles.eventItem}>
                        <span className={styles.eventDate}>August 10, 2024</span>
                        <span className={styles.eventName}>Outdoor Concert</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Events;