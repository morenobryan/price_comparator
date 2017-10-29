// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInputText from '../../shared/components/ComparisonInputText';
import ComparisonInputSelect from '../../shared/components/ComparisonInputSelect';
import { red, textColor } from '../../shared/styles';

type Props = {
  productName: string,
  unit: string,
  titleColor: string,
  reset: () => void,
};

export default class ProductForm extends React.Component<Props> {
  quantity: ?any;
  rollWidth: ?any;
  price: ?any;

  setQuantityRef = (componentRef: any) => (this.quantity = componentRef);
  setRollWidthRef = (componentRef: any) => (this.rollWidth = componentRef);
  setPriceRef = (componentRef: any) => (this.price = componentRef);

  componentWillMount() {
    this.props.reset();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: this.props.titleColor }]}>
          {this.props.productName}
        </Text>
        <Field
          ref={this.setQuantityRef}
          refField="quantity"
          withRef
          name="quantity"
          fieldTitle="Quantidade de Rolos"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
          onEnter={() => {
            this.rollWidth && this.rollWidth.getRenderedComponent().refs.rollWidth.focus();
          }}
        />
        <Field
          ref={this.setRollWidthRef}
          refField="rollWidth"
          withRef
          name="rollWidth"
          fieldTitle="Comprimento"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
          onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
        />
        <Field
          name="widthUnit"
          fieldTitle="Unidade"
          component={ComparisonInputSelect}
          selectedColor={red}
          selectedOption={this.props.unit}
          options={['m', 'cm']}
        />
        <Field
          ref={this.setPriceRef}
          refField="price"
          withRef
          name="price"
          fieldTitle="Preço"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
          onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 0.5,
    alignSelf: 'stretch',
  },
  title: {
    fontFamily: 'proximaNovaSoftBold',
    fontSize: 30,
    marginBottom: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 0.4,
    color: textColor,
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
});
