import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './navbar';
import { navLinks } from '../header-section/header-section';

describe('Navbar', () => {
  const toggleMobileNav = jest.fn();
  const isMobileNavOpen = false;

  test('renders brand', () => {
    render(
      <Navbar
        toggleMobileNav={toggleMobileNav}
        isMobileNavOpen={isMobileNavOpen}
        navLinks={navLinks}
      />
    );
    expect(screen.getByTestId('brand')).toBeInTheDocument();
  });

  test('renders hamburger button', () => {
    render(
      <Navbar
        toggleMobileNav={toggleMobileNav}
        isMobileNavOpen={isMobileNavOpen}
        navLinks={navLinks}
      />
    );
    expect(screen.getByTestId('hamburger-button')).toBeInTheDocument();
  });

  test('renders desktop menu', () => {
    render(
      <Navbar
        toggleMobileNav={toggleMobileNav}
        isMobileNavOpen={isMobileNavOpen}
        navLinks={navLinks}
      />
    );
    navLinks.forEach((link) => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
  });
});
