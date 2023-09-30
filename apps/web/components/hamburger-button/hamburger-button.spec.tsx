import { render } from '@testing-library/react';

import HamburgerButton from './hamburger-button';

describe('HamburgerButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HamburgerButton />);
    expect(baseElement).toBeTruthy();
  });
});
