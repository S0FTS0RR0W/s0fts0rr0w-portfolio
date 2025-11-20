import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/s0fts0rr0w/repos');
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();

        const formattedProjects: Project[] = data.map((repo: any) => ({
          title: repo.name,
          description: repo.description || 'No description provided.',
          imgUrl: 'https://via.placeholder.com/300', // Placeholder image
          projectUrl: repo.homepage || repo.html_url,
          githubUrl: repo.html_url,
        }));
        setGithubProjects(formattedProjects);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <p className="text-center">Loading projects...</p>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <p className="text-center text-danger">Error loading projects: {error}</p>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {githubProjects.length > 0 ? (
            githubProjects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <ProjectCard {...project} />
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center">No GitHub projects found.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
