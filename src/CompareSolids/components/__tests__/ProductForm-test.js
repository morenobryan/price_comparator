import 'react-native';
import React from 'react';
import ProductForm from '../ProductForm';

import { shallow } from 'enzyme';

const props = {
  productName: 'product one',
  unit: 'unit',
  titleColor: '#fff',
  reset: () => {},
};

test('renders correctly', () => {
  const wrapper = shallow(<ProductForm {...props} />);
  expect(wrapper).toMatchSnapshot();
});
