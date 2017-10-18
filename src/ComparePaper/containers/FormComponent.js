// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductOne from './ProductOne';
import ProductTwo from './ProductTwo';
import CompareButton from '../../shared/components/CompareButton';

type Props = {
  disabledSubmit: boolean,
  navigation: { navigate: string => void },
};

export default class ComparePaper extends React.Component<Props> {
  render() {
    const { disabledSubmit, navigation } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <ProductOne />
          <ProductTwo />
          <CompareButton
            disabled={disabledSubmit}
            navigation={navigation}
            nextPage="ComparePaperResult"
            label="COMPARAR"
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    flex: 1,
  },
});
