import React from 'react';
import Results from '../Results'

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});
