import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <Container className="text-center">
        <h1 className="display-3 animated-name">
          {'S0FTS0RR0W'.split(' ').map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split('').map((char, charIndex) => (
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className="animated-letter"
                  style={{ animationDelay: `${(wordIndex * (word.length + 1) + charIndex) * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
              {wordIndex < 'S0FTS0RR0W'.split(' ').length - 1 && (
                <span className="animated-letter" style={{ animationDelay: `${(wordIndex * (word.length + 1) + word.length) * 0.1}s` }}> </span>
              )}
            </React.Fragment>
          ))}
        </h1>
        <p className="lead">Full-Stack Developer | React Enthusiast | TypeScript Fan</p>
        <Button variant="primary" size="lg" href="#projects">
          View My Work
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
