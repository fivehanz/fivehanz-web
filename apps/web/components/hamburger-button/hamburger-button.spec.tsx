/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HamburgerButton from './hamburger-button';

describe('HamburgerButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HamburgerButton toggleMobileNav={() => {}} isMobileNavOpen={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});

test('renders HamburgerButton', () => {
  render(
    <HamburgerButton toggleMobileNav={() => {}} isMobileNavOpen={false} />
  );

  const menuButton = screen.getByRole('button');
  expect(menuButton).toBeInTheDocument();
});

test('renders MenuIcon when isMobileNavOpen is false', () => {
  render(
    <HamburgerButton toggleMobileNav={() => {}} isMobileNavOpen={false} />
  );

  const menuIcon = screen.getByTestId('menu-icon');
  expect(menuIcon).toBeInTheDocument();
});

test('renders CloseIcon when isMobileNavOpen is true', () => {
  render(<HamburgerButton toggleMobileNav={() => {}} isMobileNavOpen={true} />);

  const closeIcon = screen.getByTestId('close-icon');
  expect(closeIcon).toBeInTheDocument();
});

test('calls toggleMobileNav when button is clicked', () => {
  const toggleMobileNavMock = jest.fn();
  render(
    <HamburgerButton
      toggleMobileNav={toggleMobileNavMock}
      isMobileNavOpen={false}
    />
  );

  const menuButton = screen.getByRole('button');
  fireEvent.click(menuButton);

  expect(toggleMobileNavMock).toHaveBeenCalledTimes(1);
});
