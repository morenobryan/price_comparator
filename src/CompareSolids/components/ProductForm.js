// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInputText from '../../shared/components/ComparisonInputText';
import ComparisonInputSelect from '../../shared/components/ComparisonInputSelect';
import { textColor } from '../../shared/styles';

type Props = {
  productName: string,
  unit: string,
  titleColor: string,
};

export default class ProductForm extends React.Component<Props> {
  quantity: ?any;
  mass: ?any;
  price: ?any;

  quantityRef = (componentRef: any) => (this.quantity = componentRef);
  massRef = (componentRef: any) => (this.mass = componentRef);
  priceRef = (componentRef: any) => (this.price = componentRef);

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: this.props.titleColor }]}>
          {this.props.productName}
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Número de Itens</Text>
          <Field
            ref={this.quantityRef}
            refField="quantity"
            withRef
            name="quantity"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor={textColor}
            component={ComparisonInputText}
            onEnter={() => {
              this.mass && this.mass.getRenderedComponent().refs.mass.focus();
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Massa do Item</Text>
          <Field
            ref={this.massRef}
            refField="mass"
            withRef
            name="mass"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor={textColor}
            component={ComparisonInputText}
            onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Preço</Text>
          <Field
            ref={this.priceRef}
            refField="price"
            withRef
            name="price"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor={textColor}
            component={ComparisonInputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <Field
            name="unit"
            component={ComparisonInputSelect}
            selectedOption={this.props.unit}
            options={['g', 'kg']}
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
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
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
