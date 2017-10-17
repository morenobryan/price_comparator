// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInput from './ComparisonInput';
import UnitSwitcher from './UnitSwitcher';

type Props = {
  productName: string,
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
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.productName}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Qtde de Rolos</Text>
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
          <Text style={styles.inputLabel}>Comprimento</Text>
          <Field
            ref={this.setRollWidthRef}
            refField="rollWidth"
            withRef
            name="rollWidth"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInput}
            onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <View style={styles.unitContainer}>
            <UnitSwitcher
              name="m"
              selected={this.props.unit === 'm'}
              onPress={this.props.setMeterUnit}
            />
            <UnitSwitcher
              name="cm"
              selected={this.props.unit === 'cm'}
              onPress={this.props.setCentimeterUnit}
            />
          </View>
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
    padding: 20,
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: '#1E88E5',
  },
  unitContainer: {
    flex: 0.6,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
    color: '#0D47A1',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 0.4,
    color: '#B3E5FC',
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
});
