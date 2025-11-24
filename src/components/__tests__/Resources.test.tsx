import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from '../Resources/Resources';

const resources = [
  {
    title: 'React Documentation',
    icon: '📚',
    summary: 'Official React documentation and guides.',
    link: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'MDN Web Docs',
    icon: '🌐',
    summary: 'Resources for web developers, tutorials and references.',
    link: 'https://developer.mozilla.org/en-US/',
  },
];

describe('Resources component', () => {
  it('renders resource items correctly', () => {
    render(<Resources resources={resources} />);
    resources.forEach((resource) => {
      expect(screen.getByText(resource.title)).toBeInTheDocument();
      expect(screen.getByText(resource.summary)).toBeInTheDocument();
    });
  });
});
