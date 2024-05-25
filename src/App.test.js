import { render, screen } from '@testing-library/react';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';

test('renders Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Shashank Singh/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About component', () => {
  render(<About />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Blog component', () => {
  render(<Blog />);
  const linkElement = screen.getByText(/I write/i);
  expect(linkElement).toBeInTheDocument();
});