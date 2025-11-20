import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const GithubIcon = FaGithub as any;

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, projectUrl, githubUrl }) => {
  return (
    <Card className="h-100 project-card">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={projectUrl} target="_blank">View Project</Button>
        <Button variant="secondary" href={githubUrl} target="_blank" className="ms-2">
          <GithubIcon /> GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
