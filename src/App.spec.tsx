import * as React from 'react';
// import * as renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import App from './App';

// Smoke Test
it('renders without crashing', () => {
  shallow(<App />);
});

/* describe('App', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <App />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}); */