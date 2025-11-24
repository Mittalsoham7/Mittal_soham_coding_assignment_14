import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  margin: 0.25rem 0;
`;

interface BasicInfoProps {
  name: string;
  email: string;
  description: string;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ name, email, description }) => {
  return (
    <Container>
      <Title>Basic Information</Title>
      <InfoText><strong>Name:</strong> {name}</InfoText>
      <InfoText><strong>Email:</strong> {email}</InfoText>
      <InfoText>{description}</InfoText>
    </Container>
  );
};

export default BasicInfo;
