import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './title';

describe('Title', () => {
  test('renders title with default underline width', () => {
    const { getByText } = render(<Title>Test Title</Title>);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders title with custom underline width', () => {
    const { getByText } = render(
      <Title underlineWidth="6rem">Test Title</Title>
    );
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders title with reverse direction', () => {
    const { getByText } = render(<Title reverse>Test Title</Title>);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders title with reverse direction and custom underline width', () => {
    const { getByText } = render(
      <Title reverse underlineWidth="6rem">
        Test Title
      </Title>
    );
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });
});
