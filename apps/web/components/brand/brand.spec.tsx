import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Brand from './brand';

describe('Brand', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brand />);
    expect(baseElement).toBeTruthy();
  });
});

test('renders the brand component', () => {
  render(<Brand />);
  const brandElement = screen.getByTestId('brand');
  expect(brandElement).toBeInTheDocument();
});

test('renders the brand text correctly', () => {
  render(<Brand />);
  const brandElement = screen.getByTestId('brand');
  expect(brandElement.textContent).toBe('fivehanz.');
});

test('applies the correct font size and weight', () => {
  render(<Brand />);
  const brandElement = screen.getByTestId('brand');
  expect(brandElement).toHaveStyle({
    fontSize: '2rem',
    fontWeight: '800',
  });
});
