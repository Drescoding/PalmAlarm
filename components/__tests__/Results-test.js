import React from 'react';
import Results from '../Results'

import renderer from 'react-test-renderer';

test('renders correctly when no barcode', () => {
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('render correctly when the barcode is found', () => {
//   const barcode = 737628064502;
//   const tree = rendered.create(<Results barcode={barcode} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
