import React from 'react';
import HomeScreen from '../components/HomeScreen'
// import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
