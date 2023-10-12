import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FooterSection from './footer-section';

describe('FooterSection', () => {
  it('should render the footer with the current year', () => {
    const { getByText } = render(<FooterSection />);
    const year = new Date().getFullYear().toString();
    const expectedText = `© ${year}`;
    expect(getByText(expectedText)).toBeInTheDocument();
  });

  it('should render the footer with the Brand component', () => {
    const { getByTestId } = render(<FooterSection />);
    const brandElement = getByTestId('brand');
    expect(brandElement).toBeInTheDocument();
  });

  it('should render the footer with the Container component', () => {
    const { getByTestId } = render(<FooterSection />);
    const containerElement = getByTestId('footer');
    expect(containerElement).toBeInTheDocument();
  });
});
