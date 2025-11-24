import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const WorkItem = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const WorkTitle = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const WorkDescription = styled.p`
  margin: 0.25rem 0;
`;

const WorkTechList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0 0 0;
`;

interface WorkItemProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  techList: string[];
}

interface WorkProps {
  items: WorkItemProps[];
}

const Work: React.FC<WorkProps> = ({ items }) => {
  return (
    <Container>
      <Title>Work</Title>
      {items.map(({ title, description, image, link, techList }, index) => (
        <WorkItem key={index}>
          <WorkTitle>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </WorkTitle>
          {image && (
            <img
              src={image}
              alt={title}
              style={{ maxWidth: '200px', marginBottom: '0.5rem' }}
            />
          )}
          <WorkDescription>{description}</WorkDescription>
          <WorkTechList>
            {techList.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </WorkTechList>
        </WorkItem>
      ))}
    </Container>
  );
};

export default Work;
