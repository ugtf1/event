import React from 'react';
import styles from './Contact.module.css';

const features = [
    {
        image: '/assets/hall1.jpg',
        title: 'Spacious Design',
        description: 'Ample room for all your guests.',
        text: 'Our tents provide a comfortable and open environment for any event.',
        button: 'Available',
    },
    
    {
        image: '/assets/hall4.jpg',
        title: 'Customizable',
        description: 'Personalize for your event.',
        text: 'Choose from a variety of sizes, colors, and accessories.',
        button: 'Available',
    },
];

const Features = () => (
    <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
                <div className={styles.card} key={idx}>
                    <img src={feature.image} alt={feature.title} className={styles.cardImage} />
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <h4 className={styles.cardDescription}>{feature.description}</h4>
                    <p className={styles.cardText}>{feature.text}</p>
                    <button className={styles.cardButton}>{feature.button}</button>
                </div>
            ))}
        </div>
    </section>
);

export default Features;