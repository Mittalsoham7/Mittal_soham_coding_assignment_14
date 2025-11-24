import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #d1ecf1;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Item = styled.div`
  margin-bottom: 0.75rem;
`;

const ItemTitle = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const ItemDescription = styled.p`
  margin: 0;
`;

interface ItemProps {
  title: string;
  description: string;
}

interface LanguagesFrameworksProps {
  items: ItemProps[];
}

const LanguagesFrameworks: React.FC<LanguagesFrameworksProps> = ({ items }) => {
  return (
    <Container>
      <Title>Languages and Frameworks</Title>
      {items.map(({ title, description }, index) => (
        <Item key={index}>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </Item>
      ))}
    </Container>
  );
};

export default LanguagesFrameworks;
