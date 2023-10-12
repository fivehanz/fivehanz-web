import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileNav from './mobile-nav';
import { navLinks } from '../header-section/header-section';

describe('MobileNav', () => {
  const toggleMobileNavMock = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <MobileNav
        toggleMobileNav={toggleMobileNavMock}
        mobileNavClass="inherit"
        navLinks={navLinks}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders mobile navigation component correctly', () => {
    const { getByText } = render(
      <MobileNav
        toggleMobileNav={toggleMobileNavMock}
        mobileNavClass="inherit"
        navLinks={navLinks}
      />
    );

    expect(getByText('home')).toBeInTheDocument();
    expect(getByText('projects')).toBeInTheDocument();
    expect(getByText('about')).toBeInTheDocument();
    expect(getByText('contact')).toBeInTheDocument();
    expect(getByText('devBlog')).toBeInTheDocument();
  });

  it('calls toggleMobileNav when a link is clicked', () => {
    const { getByText } = render(
      <MobileNav
        toggleMobileNav={toggleMobileNavMock}
        mobileNavClass="inherit"
        navLinks={navLinks}
      />
    );

    fireEvent.click(getByText('home'));
    expect(toggleMobileNavMock).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText('projects'));
    expect(toggleMobileNavMock).toHaveBeenCalledTimes(2);

    fireEvent.click(getByText('about'));
    expect(toggleMobileNavMock).toHaveBeenCalledTimes(3);

    fireEvent.click(getByText('contact'));
    expect(toggleMobileNavMock).toHaveBeenCalledTimes(4);

    fireEvent.click(getByText('devBlog'));
    expect(toggleMobileNavMock).toHaveBeenCalledTimes(5);
  });
});
