import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  const phrases = [
    'Charlie Brown',
    'Full-Stack Developer',
    'React Enthusiast',
    'TypeScript Fan',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Initial typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        setTypingSpeed(75); // Deleting speed
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        setTypingSpeed(150); // Typing speed
      }
    };

    let timer = setTimeout(handleTyping, typingSpeed);

    // When typing is complete
    if (!isDeleting && displayedText === phrases[phraseIndex]) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
    }
    // When deleting is complete
    else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase, loop back if at end
      setTypingSpeed(150); // Reset typing speed for next phrase
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <div className="hero-section" id="home">
      <Container className="text-center">
        <h1 className="display-3 typewriter-text">{displayedText}</h1>
        <p className="lead">Full-Stack Developer | React Enthusiast | TypeScript Fan</p>
        <Button variant="primary" size="lg" href="#projects">
          View My Work
        </Button>
      </Container>
    </div>
  );
};

export default Hero;