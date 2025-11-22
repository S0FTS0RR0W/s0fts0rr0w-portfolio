// discord bot page for showcasing summurai discord bot
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Discord.css';

const Discord = () => {
  return (
    <section id="discord-bot" className="py-5 discord-section">
      <Container>
        <h2 className="text-center mb-4">Summurai Discord Bot</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="discord-card">
              <Card.Body>
                <Card.Title className="text-center mb-3">About Summurai</Card.Title>
                <Card.Text>
                  Summurai is a versatile Discord bot designed to enhance your server experience with a variety of useful features. From moderation tools to fun commands and utility functions, Summurai aims to be an all-in-one solution for your community.
                </Card.Text>
                <Card.Text>
                  Currently under active development, Summurai is constantly being updated with new features and improvements based on user feedback and emerging needs.
                </Card.Text>
                <h4 className="mt-4">Key Features:</h4>
                <ul>
                  <li><strong>Moderation:</strong> Keep your server clean and organized with commands for kicking, banning, muting, and more.</li>
                  <li><strong>Utility:</strong> Practical tools like server info, user info, and avatar commands.</li>
                  <li><strong>Fun:</strong> Engage your community with entertaining commands and games.</li>
                  <li><strong>Customizable:</strong> Many features can be configured to suit your server's specific requirements.</li>
                  <li><strong>Open Source:</strong> The bot's code is publicly available on GitHub, allowing for transparency and community contributions.</li>
                </ul>
                <div className="text-center mt-4">
                  <a 
                    href="https://github.com/s0fts0rr0w/Summurai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary me-2"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href="https://discord.com/oauth2/authorize?client_id=1114472241497911336&scope=bot&permissions=8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    Invite Summurai to your Server
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Discord;