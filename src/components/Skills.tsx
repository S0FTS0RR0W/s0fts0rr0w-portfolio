import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faDatabase } from '@fortawesome/free-solid-svg-icons'; // faLeaf for MongoDB, faDatabase for PostgreSQL

interface Skill {
  icon: React.ReactElement;
  name: string;
}

const skills: Skill[] = [
  { icon: <FontAwesomeIcon icon={faReact} size="3x" />, name: 'React' },
  { icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />, name: 'Node.js' },
  { icon: <FontAwesomeIcon icon={faJsSquare} size="3x" />, name: 'JavaScript' },
  { icon: <FontAwesomeIcon icon={faHtml5} size="3x" />, name: 'HTML5' },
  { icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" />, name: 'CSS3' },
  { icon: <FontAwesomeIcon icon={faGitAlt} size="3x" />, name: 'Git' },
  { icon: <FontAwesomeIcon icon={faLeaf} size="3x" />, name: 'MongoDB' }, // Using faLeaf as a common representation for MongoDB
  { icon: <FontAwesomeIcon icon={faDatabase} size="3x" />, name: 'PostgreSQL' }, // Using faDatabase for PostgreSQL
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
