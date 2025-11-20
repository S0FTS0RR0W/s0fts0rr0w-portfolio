import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const GithubIcon = FaGithub as any;
const LinkedinIcon = FaLinkedin as any;

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <Row>
          <Col>
            <a href="https://github.com/S0FTS0RR0W" className="text-white me-3"><GithubIcon size={30} /></a>
            <a href="#" className="text-white"><LinkedinIcon size={30} /></a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Charlie Brown. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
