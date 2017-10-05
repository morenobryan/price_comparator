import React from 'react';
import AppNavigator from './src/Router/containers/AppNavigator';
import store from './src/store';
import { AppLoading, Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      proximaNovaSemibold: require('./assets/fonts/proximaNovaSemibold.ttf'),
      proximaNovaAltBold: require('./assets/fonts/proximaNovaAltBold.ttf'),
      proximaNovaAltRegular: require('./assets/fonts/proximaNovaAltRegular.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
