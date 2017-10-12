// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInput from './ComparisonInput';

type Props = {
  setMeterUnit: () => void,
  setCentimeterUnit: () => void,
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
    return (
      <View style={[styles.subContainer, styles.subContainerOne]}>
        <Text style={[styles.title, styles.titleOne]}>PRODUTO 1</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Quantidade de Rolos</Text>
          <Field
            ref={this.setRollAmountRef}
            refField="rollAmount"
            withRef
            name="rollAmount"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInput}
            onEnter={() => {
              this.rollWidth && this.rollWidth.getRenderedComponent().refs.rollWidth.focus();
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Comprimento do Rolo</Text>
          <Field
            ref={this.setRollWidthRef}
            refField="rollWidth"
            withRef
            name="rollWidth"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInput}
            onEnter={() =>
              this.widthUnit && this.widthUnit.getRenderedComponent().refs.widthUnit.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <TouchableOpacity
            style={
              this.props.unit === 'm'
                ? [styles.unitButton, styles.unitButtonOne]
                : [styles.unitButton, styles.unitButtonOneDisabled]
            }
            onPress={this.props.setMeterUnit}
          >
            <Text style={[styles.unitLabel, styles.unitLabelOne]}>m</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.props.unit === 'cm'
                ? [styles.unitButton, styles.unitButtonOne]
                : [styles.unitButton, styles.unitButtonOneDisabled]
            }
            onPress={this.props.setCentimeterUnit}
          >
            <Text style={[styles.unitLabel, styles.unitLabelOne]}>cm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Preço</Text>
          <Field
            ref={this.setPriceRef}
            refField="price"
            withRef
            name="price"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInput}
            onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
          />
        </View>
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
