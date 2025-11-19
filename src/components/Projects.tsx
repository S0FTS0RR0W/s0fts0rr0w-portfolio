import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one. It's a really cool project.",
    imgUrl: "https://via.placeholder.com/300",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of project two. It's also a very cool project.",
    imgUrl: "https://via.placeholder.com/300",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of project three. This one is the coolest.",
    imgUrl: "https://via.placeholder.com/300",
    projectUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
