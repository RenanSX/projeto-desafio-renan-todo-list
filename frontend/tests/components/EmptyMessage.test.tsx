import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyMessage from '@/components/EmptyMessage';

describe('EmptyMessage', () => {
  it('renders the message', () => {
    const testMessage = 'Test message';
    render(<EmptyMessage message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});