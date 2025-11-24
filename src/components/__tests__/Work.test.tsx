import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from '../Work/Work';

const workItems = [
  {
    title: 'Project A',
    description: 'Description of Project A.',
    image: '',
    link: 'https://example.com/project-a',
    techList: ['React', 'TypeScript', 'CSS'],
  },
  {
    title: 'Project B',
    description: 'Description of Project B.',
    image: '',
    link: 'https://example.com/project-b',
    techList: ['Node.js', 'Express', 'MongoDB'],
  },
];

describe('Work component', () => {
  it('renders work items correctly', () => {
    render(<Work items={workItems} />);
    expect(screen.getAllByText(/Project A/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Project B/)[0]).toBeInTheDocument();
    expect(screen.getByText(/Description of Project A./)).toBeInTheDocument();
    expect(screen.getByText(/Description of Project B./)).toBeInTheDocument();
  });
});
