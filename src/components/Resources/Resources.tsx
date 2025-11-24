import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #d4edda;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const ResourceItem = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

const ResourceImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const ResourceTitle = styled.h3`
  margin: 0;
`;

const ResourceSummary = styled.p`
  margin: 0.25rem 0 0 0;
`;

const ResourceLink = styled.a`
  font-size: 0.9rem;
  color: #155724;
  text-decoration: underline;
`;

interface ResourceProps {
  title: string;
  icon?: string;
  summary: string;
  link: string;
}

interface ResourcesProps {
  resources: ResourceProps[];
}

const Resources: React.FC<ResourcesProps> = ({ resources }) => {
  return (
    <Container>
      <Title>Resources</Title>
      {resources.map(({ title, icon, summary, link }, index) => (
        <ResourceItem key={index}>
          {icon && <ResourceImage src={icon} alt={title} />}
          <div>
            <ResourceTitle>{title}</ResourceTitle>
            <ResourceSummary>{summary}</ResourceSummary>
            <ResourceLink href={link} target="_blank" rel="noopener noreferrer">{link}</ResourceLink>
          </div>
        </ResourceItem>
      ))}
    </Container>
  );
};

export default Resources;
