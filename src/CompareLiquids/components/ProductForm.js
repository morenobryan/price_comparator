// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ComparisonInputText from '../../shared/components/ComparisonInputText';
import ComparisonInputSelect from '../../shared/components/ComparisonInputSelect';
import { yellow, textColor } from '../../shared/styles';

type Props = {
  productName: string,
  unit: string,
  titleColor: string,
  reset: () => void,
};

export default class ProductForm extends React.Component<Props> {
  quantity: ?any;
  volume: ?any;
  price: ?any;

  quantityRef = (componentRef: any) => (this.quantity = componentRef);
  volumeRef = (componentRef: any) => (this.volume = componentRef);
  priceRef = (componentRef: any) => (this.price = componentRef);

  componentWillMount() {
    this.props.reset();
  }

  setNativeProps(nativeProps) {
    this.price.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: this.props.titleColor }]}>
          {this.props.productName}
        </Text>

        <Field
          ref={this.quantityRef}
          refField="quantity"
          withRef
          name="quantity"
          fieldTitle="Número de Itens"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
          onEnter={() => {
            this.volume && this.volume.getRenderedComponent().refs.volume.focus();
          }}
        />
        <Field
          ref={this.volumeRef}
          refField="volume"
          withRef
          name="volume"
          fieldTitle="Volume do Item"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
          onEnter={() => this.price && this.price.getRenderedComponent().refs.price.focus()}
        />
        <Field
          name="unit"
          fieldTitle="Unidade"
          component={ComparisonInputSelect}
          selectedOption={this.props.unit}
          selectedColor={yellow}
          options={['L', 'mL']}
        />
        <Field
          ref={this.priceRef}
          refField="price"
          withRef
          name="price"
          fieldTitle="Preço"
          keyboardType="numeric"
          returnKeyType="next"
          selectionColor={textColor}
          component={ComparisonInputText}
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

const globalizePropTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string,
};

const globalizeFormatPropTypes = {
  getCurrencyFormatter: PropTypes.func.isRequired,
  getDateFormatter: PropTypes.func.isRequired,
  getMessageFormatter: PropTypes.func.isRequired,
  getNumberFormatter: PropTypes.func.isRequired,
  getPluralGenerator: PropTypes.func.isRequired,
  getRelativeTimeFormatter: PropTypes.func.isRequired,
};

const globalizeShape = PropTypes.shape({
  ...globalizePropTypes,
  ...globalizeFormatPropTypes,
});
ProductForm.contextTypes = {
  globalize: globalizeShape,
};
