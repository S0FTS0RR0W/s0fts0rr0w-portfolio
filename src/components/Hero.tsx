import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <Container className="text-center">
        <h1 className="display-3">Your Name</h1>
        <p className="lead">Full-Stack Developer | React Enthusiast | TypeScript Fan</p>
        <Button variant="primary" size="lg" href="#projects">
          View My Work
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
