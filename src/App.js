// src/App.js
import React from 'react';
// import styles from './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Events from './sections/Events';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
// import Books from './sections/Books';
import Footer from './components/Footer';
import CardsContainer from './sections/CardsContainer';
import ContactUs from './sections/ContactUs';


function App() {

// Sample booked dates in 'YYYY-MM-DD' format

  return (
    
      
    <>
      <Header />
      <main>
       <Hero />
        <Features />
        <Events />
        <div>
      {/* <h1>Our Event Hall Availability</h1> */}
      {/* <EventHallBookingCalendar bookedDates={bookedDates} /> */}
      </div>
        <Contact />
        <div>
        <CardsContainer />
        </div>
        <Testimonials />
        {/* <Books /> */}
      
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
