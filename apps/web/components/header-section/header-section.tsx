import { useState } from 'react';
import Navbar from '../navbar/navbar';
import MobileNav from '../mobile-nav/mobile-nav';

/* eslint-disable-next-line */
export interface HeaderSectionProps {}

// Define an array of navLinks using the Link interface
export const navLinks: ReadonlyArray<Link> = [
  { id: '1', title: 'home', href: '#home', external: false },
  {
    id: '5',
    title: 'devBlog',
    href: 'https://blog.fivehanz.xyz',
    external: true,
  },
  { id: '2', title: 'projects', href: '#projects', external: false },
  { id: '3', title: 'about', href: '#about', external: false },
  { id: '4', title: 'contact', href: '#contact', external: false },
];

/**
 * Renders the header section of the website.
 * @param props - The props for the HeaderSection component.
 * @returns The JSX.Element representing the header section.
 */
export function HeaderSection(props: HeaderSectionProps): JSX.Element {
  // State variables for mobile navigation
  const [mobileNavClass, setMobileNavClass] = useState<MobileNavClass>('none');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  /**
   * Toggles the mobile navigation.
   */
  const toggleMobileNav = (): void => {
    // Calculate the new mobileNavClass based on the current isMobileNavOpen value
    const newMobileNavClass: MobileNavClass = isMobileNavOpen
      ? 'none'
      : 'inherit';

    // Update the mobileNavClass and isMobileNavOpen state variables
    setMobileNavClass(newMobileNavClass);
    setIsMobileNavOpen(!isMobileNavOpen);

    // Log the toggleMobileNav function call
    console.log('INFO: toggleMobileNav called');
  };

  // Render the header section
  return (
    <header>
      {/* Render the MobileNav component */}
      <MobileNav
        mobileNavClass={mobileNavClass}
        navLinks={navLinks}
        toggleMobileNav={toggleMobileNav}
      />

      {/* Render the Navbar component */}
      <Navbar
        toggleMobileNav={toggleMobileNav}
        isMobileNavOpen={isMobileNavOpen}
        navLinks={navLinks}
      />
    </header>
  );
}

export default HeaderSection;
