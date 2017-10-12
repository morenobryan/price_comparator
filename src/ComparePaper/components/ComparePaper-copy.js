// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInput from './ComparisonInput';

type Props = {
  handleSubmit: () => void,
  setMeterUnit: () => void,
  setCentimeterUnit: () => void,
  invalid: boolean,
  pristine: boolean,
  submitting: boolean,
  navigation: { navigate: string => void },
  unit: string,
};

export default class ComparePaper extends React.Component<Props> {
  rollAmount: ?any;
  rollWidth: ?any;
  widthUnit: ?any;
  price: ?any;

  setRollAmountRef = (componentRef: any) => (this.rollAmount = componentRef);
  setRollWidthRef = (componentRef: any) => (this.rollWidth = componentRef);
  setPriceRef = (componentRef: any) => (this.price = componentRef);

  render() {
    const { handleSubmit, invalid, pristine, submitting, navigation, unit } = this.props;

    const disabledSubmit = () => invalid || pristine || submitting;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <View style={[styles.subContainer, styles.subContainerTwo]}>
            <Text style={[styles.title, styles.titleTwo]}>PRODUTO 2</Text>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Quantidade de Rolos</Text>
              <Field
                name="rollAmount"
                keyboardType={'numeric'}
                returnKeyType={'next'}
                component={ComparisonInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Comprimento do Rolo</Text>
              <Field
                name="rollWidth"
                keyboardType={'numeric'}
                returnKeyType={'next'}
                component={ComparisonInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Unidade</Text>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonTwo]}
                onPress={this.props.setMeterUnit}
              >
                <Text style={[styles.unitLabel, styles.unitLabelTwo]}>m</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonTwo]}
                onPress={this.props.setCentimeterUnit}
              >
                <Text style={[styles.unitLabel, styles.unitLabelTwo]}>cm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Preço</Text>
              <Field
                name="price"
                keyboardType={'numeric'}
                returnKeyType={'go'}
                component={ComparisonInput}
              />
            </View>
          </View>

          <TouchableOpacity
            style={disabledSubmit() ? styles.disabledSubmitButton : styles.submitButton}
            onPress={() => navigation.navigate('ComparePaperResult')}
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
