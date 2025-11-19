import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <p className="lead">
              I am a passionate and creative full-stack developer with a knack for building elegant and efficient solutions. With a strong foundation in modern web technologies, I specialize in creating dynamic and responsive web applications.
            </p>
            <p>
              My journey in programming started with a simple "Hello, World!" and has since grown into a full-fledged passion for crafting beautiful user experiences and robust back-end systems. I am always eager to learn new technologies and take on challenging projects.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
