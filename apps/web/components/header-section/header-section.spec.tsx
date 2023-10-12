import { render } from '@testing-library/react';

import HeaderSection from './header-section';

describe('HeaderSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderSection />);
    expect(baseElement).toBeTruthy();
  });
});
