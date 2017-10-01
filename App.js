import React from 'react';
import AppNavigator from './src/Router/containers/AppNavigator';
import store from './src/store';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
