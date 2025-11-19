import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { DiMongodb, DiPostgresql } from 'react-icons/di';

const skills = [
  { icon: <FaReact size={50} />, name: 'React' },
  { icon: <FaNodeJs size={50} />, name: 'Node.js' },
  { icon: <FaJsSquare size={50} />, name: 'JavaScript' },
  { icon: <FaHtml5 size={50} />, name: 'HTML5' },
  { icon: <FaCss3Alt size={50} />, name: 'CSS3' },
  { icon: <FaGitAlt size={50} />, name: 'Git' },
  { icon: <DiMongodb size={50} />, name: 'MongoDB' },
  { icon: <DiPostgresql size={50} />, name: 'PostgreSQL' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row className="text-center">
          {skills.map((skill, index) => (
            <Col xs={4} md={2} key={index} className="mb-4">
              {skill.icon}
              <p>{skill.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
