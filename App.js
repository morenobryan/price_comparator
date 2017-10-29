import React from 'react';
import AppNavigator from './src/Router/containers/AppNavigator';
import store from './src/store';
import { AppLoading, Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { FormattedWrapper } from 'react-native-globalize';
import { Globalize } from 'react-native-globalize';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
    this._loadCldrData();
  }

  _loadCldrData = () => {
    Globalize.load([require('./assets/cldr-data/pt/currencies.json')]);
  };

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      proximaNovaSemibold: require('./assets/fonts/proximaNovaSemibold.ttf'),
      proximaNovaAltBold: require('./assets/fonts/proximaNovaAltBold.ttf'),
      proximaNovaAltRegular: require('./assets/fonts/proximaNovaAltRegular.ttf'),
      proximaNovaSoftBold: require('./assets/fonts/proximanovasoftbold.ttf'),
      flaticon: require('./assets/fonts/Flaticon.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <FormattedWrapper locale="pt" currency="BRL">
          <AppNavigator />
        </FormattedWrapper>
      </Provider>
    );
  }
}
