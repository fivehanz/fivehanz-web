import { render } from '@testing-library/react';

import ProjectSection from './project-section';

describe('ProjectSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectSection />);
    expect(baseElement).toBeTruthy();
  });
});
