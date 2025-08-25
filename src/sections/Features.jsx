import React from 'react';
import styles from './Features.module.css';

const features = [
    {
        image: '/assets/hall1.jpg',
        title: 'Banquet Hall',
        description: 'Ample room for all your guests.',
        text: '5,000 seater capacity with controled weather features, $10/hr.',
        button: 'Book Now',
    },
    {
        image: "/assets/hall2.jpg",
        title: 'Rose Garfen Hall',
        description: 'Stay protected in any season.',
        text: '2,000 seater Engineered to withstand rain, wind, and sun for year-round use. $8/hr',
        button: 'Book Now',
    },
    {
        image: '/assets/hall3.png',
        title: 'Party Tent',
        description: '1,500 saeter capacity, Quick and hassle-free installation.',
        text: 'Set up your party tent in minutes with our intuitive design. $5/hr',
        button: 'Book Now',
    },
    {
        image: '/assets/hall4.jpg',
        title: 'Customizable Hall',
        description: 'Personalize for your event.',
        text: 'Choose from a variety of sizes, colors, and accessories. $10/hr',
        button: 'Book Now',
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
                    <a 
                        href="https://eventback2.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.cardButton}
                    >
                        {feature.button}
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
