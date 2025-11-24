import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const ToolItem = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

const ToolImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const ToolTitle = styled.h3`
  margin: 0;
`;

const ToolDescription = styled.p`
  margin: 0.25rem 0 0 0;
`;

interface ToolProps {
  title: string;
  description: string;
  image?: string;
}

interface ToolsProps {
  tools: ToolProps[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
  return (
    <Container>
      <Title>Tools</Title>
      {tools.map(({ title, description, image }, index) => (
        <ToolItem key={index}>
          {image && <ToolImage src={image} alt={title} />}
          <div>
            <ToolTitle>{title}</ToolTitle>
            <ToolDescription>{description}</ToolDescription>
          </div>
        </ToolItem>
      ))}
    </Container>
  );
};

export default Tools;
