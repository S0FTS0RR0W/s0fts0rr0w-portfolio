import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  const phrases = [
    'Charlie Brown',
    'Full-Stack Developer',
    'System Administrator',
    'TypeScript Fan',
    'Homelabber',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Initial typing speed
  const [isPaused, setIsPaused] = useState(false);

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

    let timer: ReturnType<typeof setTimeout>;

    // When typing is complete
    if (!isDeleting && displayedText === phrases[phraseIndex]) {
      setIsPaused(true);
      timer = setTimeout(() => {
        setIsDeleting(true);
        setIsPaused(false);
      }, 1500); // Pause before deleting
    }
    // When deleting is complete
    else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase, loop back if at end
      setTypingSpeed(150); // Reset typing speed for next phrase
    }
    // Otherwise, type or delete
    else if (!isPaused) {
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, isPaused]);

  return (
    <div className="hero-section reveal" id="home">
      <Container className="text-center">
        <h1 className={`display-3 typewriter-text ${isPaused ? 'blinking-cursor' : ''}`}>{displayedText}</h1>
        <p className="lead">Full-Stack Developer | React Enthusiast | TypeScript Fan</p>
        <Button className="btn" variant="primary" size="lg" href="projects">
          View My Work
        </Button>
      </Container>
    </div>
  );
};

export default Hero;