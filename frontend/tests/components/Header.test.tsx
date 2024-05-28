import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the title', () => {
    const testTitle = 'Test title';
    render(<Header title={testTitle} />);

    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });
});