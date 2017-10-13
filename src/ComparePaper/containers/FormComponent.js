// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductOne from './ProductOne';
import ProductTwo from './ProductTwo';

type Props = {
  disabledSubmit: boolean,
  navigation: { navigate: string => void },
};

export default class ComparePaper extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <ProductOne />
          <ProductTwo />

          <TouchableOpacity
            style={[
              styles.submitButton,
              this.props.disabledSubmit ? styles.disabledSubmitButton : styles.enabledSubmitButton,
            ]}
            onPress={() => this.props.navigation.navigate('ComparePaperResult')}
            disabled={this.props.disabledSubmit}
          >
            <Text
              style={this.props.disabledSubmit ? styles.disabledSubmitLabel : styles.submitLabel}
            >
              COMPARAR
            </Text>
          </TouchableOpacity>
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
  submitLabel: {
    color: '#B3E5FC',
    fontFamily: 'proximaNovaAltRegular',
  },
  disabledSubmitLabel: {
    color: '#fff',
    fontFamily: 'proximaNovaAltRegular',
  },
  submitButton: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 0,
  },
  enabledSubmitButton: {
    backgroundColor: '#0D47A1',
  },
  disabledSubmitButton: {
    backgroundColor: '#90CAF9',
  },
});
