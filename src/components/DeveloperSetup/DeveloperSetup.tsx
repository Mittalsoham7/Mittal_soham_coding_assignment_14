import React from 'react';
import styled from 'styled-components';

interface SetupItem {
  title: string;
  description: string;
}

interface DeveloperSetupProps {
  items: SetupItem[];
}

const Container = styled.div`
  margin: 1rem;
`;

const DeveloperSetup: React.FC<DeveloperSetupProps> = ({ items }) => {
  return (
    <Container>
      <h2>Developer Setup</h2>
      {items.map(({ title, description }, idx) => (
        <div key={idx}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </Container>
  );
};

export default DeveloperSetup;
