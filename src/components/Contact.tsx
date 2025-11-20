import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css'; // Import the new CSS file

const LinkedinIcon = FaLinkedinIn as any;
const GithubIcon = FaGithub as any;
const TwitterIcon = FaTwitter as any;

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="mx-auto text-center">
            <h3>Find me on social media</h3>
            <div className="social-icons mt-3">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <GithubIcon />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <TwitterIcon />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
