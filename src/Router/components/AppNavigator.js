// @flow
import * as React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Root } from '../router';

const AppNavigator = props => (
  <Root
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

export default AppNavigator;
