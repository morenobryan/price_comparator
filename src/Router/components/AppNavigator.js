// @flow
import * as React from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Root } from '../router';

export default class AppNavigator extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;

    return (
      <Root
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}
