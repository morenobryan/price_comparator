import * as React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ComparePaper from '../ComparePaper/containers/ComparePaper';
import ComparePaperResult from '../ComparePaper/containers/ComparePaperResult';

export const Root = StackNavigator({
  ComparePaper: {
    screen: ComparePaper,
    navigationOptions: {
      title: 'Comparar Papel',
    },
  },
  ComparePaperResult: {
    screen: ComparePaperResult,
    navigationOptions: {
      title: 'Comparar Papel - Resultado',
    },
  },
});
