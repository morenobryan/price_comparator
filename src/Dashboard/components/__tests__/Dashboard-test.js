import 'react-native';
import React from 'react';
import Dashboard from '../Dashboard';

import renderer from 'react-test-renderer';

const props = {
  navigation: {
    navigate: () => {},
  },
};

test('renders correctly', () => {
  const tree = renderer.create(<Dashboard {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
