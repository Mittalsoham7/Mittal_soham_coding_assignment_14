import React from 'react';
import { render, screen } from '@testing-library/react';
import Tools from '../Tools/Tools';

const tools = [
  {
    title: 'Visual Studio Code',
    description: 'An excellent code editor for web development.',
  },
  {
    title: 'Git',
    description: 'Version control system to track changes in code.',
  },
];

describe('Tools component', () => {
  it('renders tool items correctly', () => {
    render(<Tools tools={tools} />);
    tools.forEach(tool => {
      expect(screen.getByText(tool.title)).toBeInTheDocument();
      expect(screen.getByText(tool.description)).toBeInTheDocument();
    });
  });
});
