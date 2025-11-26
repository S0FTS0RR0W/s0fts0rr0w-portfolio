import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ApiPage = () => {
  return (
    <section id="api-page" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Sarcastic HTTP API</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-3">Oh, you found my API. How... special.</Card.Title>
                <Card.Text>
                  Welcome to the most groundbreaking, earth-shattering, and utterly sarcastic HTTP API ever conceived. Prepare to be underwhelmed.
                </Card.Text>
                <Card.Text>
                  This marvel of modern engineering will respond to your requests with the kind of enthusiasm you'd expect from a sloth on a Monday morning. Don't worry, it's a feature, not a bug.
                </Card.Text>
                <h4 className="mt-4">Endpoints that might work:</h4>
                <ul>
                  <li><strong>GET /status:</strong> Ask it how it's doing. It will probably lie.</li>
                  <li><strong>GET /joke:</strong> Get a "joke". Laughter is not guaranteed. Or likely.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ApiPage;