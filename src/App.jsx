import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#06060a] antialiased">
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#06060a] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} dev.studio — Crafted with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  );
}

export default App;
