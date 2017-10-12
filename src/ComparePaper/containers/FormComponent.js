// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductOne from './ProductOne';
import ProductTwo from './ProductTwo';

type Props = {
  formOneDisabled: boolean,
  formTwoDisabled: boolean,
  navigation: { navigate: string => void },
};

export default class ComparePaper extends React.Component<Props> {
  render() {
    const disabledSubmit = () => this.props.formOneDisabled || this.props.formTwoDisabled;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <ProductOne />
          <ProductTwo />

          <TouchableOpacity
            style={disabledSubmit() ? styles.disabledSubmitButton : styles.submitButton}
            onPress={() => this.props.navigation.navigate('ComparePaperResult')}
            disabled={disabledSubmit()}
          >
            <Text style={[styles.unitLabel, styles.unitLabelOne]}>Comparar</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
  },
  subContainer: {
    padding: 20,
    flex: 0.5,
    alignSelf: 'stretch',
  },
  subContainerOne: {
    backgroundColor: '#1E88E5',
  },
  subContainerTwo: {
    backgroundColor: '#039BE5',
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
  },
  titleOne: {
    color: '#0D47A1',
  },
  titleTwo: {
    color: '#01579B',
  },
  unitButton: {
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 2,
    paddingRight: 7,
    paddingBottom: 4,
    paddingLeft: 7,
    borderWidth: 1,
    borderRadius: 5,
  },
  unitButtonOne: {
    backgroundColor: '#1976D2',
    borderColor: '#1565C0',
  },
  unitButtonOneDisabled: {
    backgroundColor: '#64B5F6',
    borderColor: '#42A5F5',
  },
  unitButtonTwo: {
    backgroundColor: '#0288D1',
    borderColor: '#0277BD',
  },
  unitButtonTwoDisabled: {
    backgroundColor: '#4FC3F7',
    borderColor: '#29B6F6',
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
  },
  unitLabelOne: {
    color: '#B3E5FC',
  },
  unitLabelDisabled: {
    color: '#F5F5F5',
  },
  unitLabelTwo: {
    color: '#B3E5FC',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 0.5,
    color: '#B3E5FC',
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
    flex: 0.5,
    fontFamily: 'proximaNovaAltRegular',
    padding: 0,
  },
  inputOne: {
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
  },
  inputTwo: {
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
  },
  submitButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0D47A1',
  },
  disabledSubmitButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#64B5F6',
  },
  submitText: {},
});
