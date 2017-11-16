import 'react-native';
import React from 'react';
import NavButton from '../NavButton';

import renderer from 'react-test-renderer';

const props = {
  navigation: {
    navigate: () => {},
  },
  backgroundColor: '#fff',
  color: '#000',
  iconColor: '#666',
  icon: 'icon',
  text: 'text',
  pageName: 'page1',
};

test('renders correctly', () => {
  const tree = renderer.create(<NavButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
