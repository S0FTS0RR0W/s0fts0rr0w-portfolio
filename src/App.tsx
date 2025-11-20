import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = './portfolio.sh';
  }, []);

  return (
    <div className="App">
      <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={isMenuOpen ? 'content-blur' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;