import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguagesFrameworks from '../LanguagesFrameworks/LanguagesFrameworks';

const items = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    title: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
  },
];

describe('LanguagesFrameworks component', () => {
  it('renders items correctly', () => {
    render(<LanguagesFrameworks items={items} />);
    items.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});
