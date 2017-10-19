// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInputText from '../../shared/components/ComparisonInputText';
import ComparisonInputSelect from '../../shared/components/ComparisonInputSelect';

type Props = {
  productName: string,
};

export default class ProductForm extends React.Component<Props> {
  quantity: ?any;
  volume: ?any;
  price: ?any;

  quantityRef = (componentRef: any) => (this.quantity = componentRef);
  volumeRef = (componentRef: any) => (this.volume = componentRef);
  priceRef = (componentRef: any) => (this.price = componentRef);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.productName}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Número de Itens</Text>
          <Field
            ref={this.quantityRef}
            refField="quantity"
            withRef
            name="quantity"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
            component={ComparisonInputText}
            onEnter={() => {
              this.volume && this.volume.getRenderedComponent().refs.volume.focus();
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Volume do Item</Text>
          <Field
            ref={this.volumeRef}
            refField="volume"
            withRef
            name="volume"
            keyboardType="numeric"
            returnKeyType="next"
            selectionColor="#0D47A1"
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
            selectionColor="#0D47A1"
            component={ComparisonInputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <Field name="unit" component={ComparisonInputSelect} options={['L', 'mL']} />
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
