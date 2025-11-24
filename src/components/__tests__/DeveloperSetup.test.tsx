import React from 'react';
import { render, screen } from '@testing-library/react';
import DeveloperSetup from '../DeveloperSetup/DeveloperSetup';

const items = [
  { title: 'VSCode', description: 'Visual Studio Code with recommended extensions' },
  { title: 'Terminal', description: 'iTerm2 with oh-my-zsh' },
  { title: 'Editor Font', description: 'Fira Code, 14pt' },
];

describe('DeveloperSetup component', () => {
  it('renders developer setup info correctly', () => {
    render(<DeveloperSetup items={items} />);
    items.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
