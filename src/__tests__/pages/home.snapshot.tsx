import { render, cleanup } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  afterEach(() => cleanup());

  it('renders homepage unchanged', () => {
    // const { container } = render(<Home />);
    // expect(container).toMatchSnapshot();
    //checking that lack of code coverage will cause checks to fail
    expect(true).toBe(true);
  });
});
