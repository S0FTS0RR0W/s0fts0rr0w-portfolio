import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WakatimeStats.css';

const WakatimeStats = () => {
  return (
    <section id="wakatime-stats" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Weekly Coding Stats</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <figure>
              <embed src="https://wakatime.com/share/@3187ed87-8a39-4e81-856d-abf72fd548a7/4a7310c2-4d40-4e4e-8bfc-07c7c384388d.svg"></embed>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WakatimeStats;