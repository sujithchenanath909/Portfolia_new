import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stack from './components/Stack.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Stack />
      <Projects />
      <Experience />
    </main>
    <Footer />
  </>
);

export default App;
