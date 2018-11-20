import 'react-native';
import React from 'react';
import HomeScreen from '../components/HomeScreen';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';


// it('renders correctly', () => {
//   const tree = renderer.create(<HomeScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('Home Screen', () => {
  it('renders correctly', () => {
    expect(shallow(<HomeScreen />).find('Home Screen').exists()).toBe(true)
  })
})
