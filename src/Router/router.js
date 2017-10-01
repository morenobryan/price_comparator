import * as React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ComparePaper from '../ComparePaper/containers/ComparePaper';

export const Root = StackNavigator({
  ComparePaper: {
    screen: ComparePaper,
    navigationOptions: {
      title: 'Comparar Papel',
    },
  },
});
