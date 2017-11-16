import 'react-native';
import React from 'react';
import ComparisonInputText from '../ComparisonInputText';

import renderer from 'react-test-renderer';

const props = {
  input: {
    onChange: () => {},
  },
  keyboardType: 'numeric',
  meta: {
    touched: false,
    error: 'error',
    warning: undefined,
  },
  onEnter: () => {},
  refField: 'ref',
  returnKeyType: 'next',
  selectionColor: '#fff',
  fieldTitle: 'title',
};

test('renders correctly', () => {
  const tree = renderer.create(<ComparisonInputText {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
