import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills/Skills';

const skillItems = [
  {
    name: 'JavaScript',
    description: 'Proficient in modern JavaScript including ES6+ features.',
  },
  {
    name: 'React',
    description: 'Experienced in building React applications.',
  },
];

describe('Skills component', () => {
  it('renders skill items correctly', () => {
    render(<Skills skills={skillItems} />);
    skillItems.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      expect(screen.getByText(skill.description)).toBeInTheDocument();
    });
  });
});
