import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import './Contact.css'; // Import the new CSS file

const LinkedinIcon = FaLinkedinIn as any;
const GithubIcon = FaGithub as any;
const TwitterIcon = FaTwitter as any;
const DiscordIcon = FaDiscord as any;

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={4} className="social-media-box mb-4 mb-md-0">
            <h3 className="text-center mb-3">Find me on social media</h3>
            <div className="social-icons-container">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <LinkedinIcon /><span className="social-text">LinkedIn</span>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon github">
                <GithubIcon /><span className="social-text">GitHub</span>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <TwitterIcon /><span className="social-text">Twitter</span>
              </a>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="social-icon discord">
                <DiscordIcon /><span className="social-text">Discord</span>
              </a>
            </div>
          </Col>
          <Col md={6}>
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
      </Container>
    </section>
  );
};

export default Contact;
