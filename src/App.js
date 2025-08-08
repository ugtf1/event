// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Events from './sections/Events';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
// import Books from './sections/Books';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
       <Hero />
        <Features />
        <Events />
        <Contact />
        <Testimonials />
        {/* <Books /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
