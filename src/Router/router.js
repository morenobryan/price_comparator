import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CompareLiquids from '../CompareLiquids/containers/Form';
import CompareLiquidsResult from '../CompareLiquids/containers/Result';
import CompareSolids from '../CompareSolids/containers/Form';
import CompareSolidsResult from '../CompareSolids/containers/Result';
import ComparePaper from '../ComparePaper/containers/Form';
import ComparePaperResult from '../ComparePaper/containers/Result';
import Dashboard from '../Dashboard/components/Dashboard.js';

export const Root = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Tela Inicial',
        header: null,
      },
    },
    CompareLiquids: {
      screen: CompareLiquids,
      navigationOptions: {
        title: 'Comparar Líquidos',
        header: null,
      },
    },
    CompareLiquidsResult: {
      screen: CompareLiquidsResult,
      navigationOptions: {
        title: 'Comparar Líquidos - Resultado',
        header: null,
      },
    },
    CompareSolids: {
      screen: CompareSolids,
      navigationOptions: {
        title: 'Comparar Sólidos',
        header: null,
      },
    },
    CompareSolidsResult: {
      screen: CompareSolidsResult,
      navigationOptions: {
        title: 'Comparar Sólidos - Resultado',
        header: null,
      },
    },
    ComparePaper: {
      screen: ComparePaper,
      navigationOptions: {
        title: 'Comparar Papel',
        header: null,
      },
    },
    ComparePaperResult: {
      screen: ComparePaperResult,
      navigationOptions: {
        title: 'Comparar Papel - Resultado',
        header: null,
      },
    },
  },
  {
    headerMode: 'screen',
  }
);
