// src/App.js
import React from 'react';
import styles from './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Events from './sections/Events';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
// import Books from './sections/Books';
import Footer from './components/Footer';
import CardsContainer from './sections/CardsContainer';
import EventHallBookingCalendar from './sections/EventHallBookingCalendar';
import Testimonialss from './sections/Testimonialss';
import ContactUs from './sections/ContactUs';




function App() {

// Sample booked dates in 'YYYY-MM-DD' format
  const bookedDates = [
    '2025-08-05', '2025-08-12', '2025-09-01',
    '2025-09-18', '2025-10-10', '2025-11-23'
  ];

  return (
    <>
      <Header />
      <main>
       <Hero />
        <Features />
        <Events />
        <div>
      <h1>Our Event Hall Availability</h1>
      <EventHallBookingCalendar bookedDates={bookedDates} />
      </div>
        <Contact />
        <div>
        <CardsContainer />
        </div>
        <Testimonials />
        {/* <Books /> */}
        <div>
      <h1>What Our Clients Say</h1>
      <Testimonialss />
    </div>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
