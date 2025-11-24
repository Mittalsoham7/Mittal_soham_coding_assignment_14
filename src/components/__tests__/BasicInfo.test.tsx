import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicInfo from '../BasicInfo/BasicInfo';

describe('BasicInfo component', () => {
  it('renders the name, email, and description', () => {
    render(
      <BasicInfo
        name="John Doe"
        email="john@example.com"
        description="Test description"
      />
    );
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });
});
