import 'react-native';
import React from 'react';
import ComparisonInputSelect from '../ComparisonInputSelect';

import renderer from 'react-test-renderer';

const props = {
  input: {
    onChange: () => {},
    value: 'test',
  },
  meta: {
    touched: false,
    error: 'error',
    warning: undefined,
  },
  options: ['one', 'two'],
  selectedOption: 'one',
  selectedColor: '#fff',
  fieldTitle: 'title',
};

test('renders correctly', () => {
  const tree = renderer.create(<ComparisonInputSelect {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
