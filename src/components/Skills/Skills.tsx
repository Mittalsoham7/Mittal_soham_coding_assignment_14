import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  background-color: #fff3cd;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const SkillItem = styled.div`
  margin-bottom: 0.75rem;
`;

const SkillName = styled.h3`
  margin: 0;
`;

const SkillDescription = styled.p`
  margin: 0.25rem 0 0 0;
`;

interface Skill {
  name: string;
  description: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Container>
      <Title>Skills</Title>
      {skills.map((skill, index) => (
        <SkillItem key={index}>
          <SkillName>{skill.name}</SkillName>
          <SkillDescription>{skill.description}</SkillDescription>
        </SkillItem>
      ))}
    </Container>
  );
};

export default Skills;
