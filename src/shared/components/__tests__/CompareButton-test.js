import 'react-native';
import React from 'react';
import CompareButton from '../CompareButton';

import renderer from 'react-test-renderer';

const props = {
  color: '#fff',
  disabled: false,
  disabledColor: '#000',
  label: 'Test Label',
  navigation: { navigate: () => {} },
  nextPage: 'Dashboard',
  icon: 'Test Icon',
};

test('renders correctly', () => {
  const tree = renderer.create(<CompareButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
