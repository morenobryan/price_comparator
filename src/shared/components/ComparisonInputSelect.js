// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { textColor, selectedUnitButton, unitButton } from '../../shared/styles';
import type { KeyboardType, ReturnKeyType } from '../../types';

type Props = {
  input: {
    onChange: any => void,
    value: string,
  },
  meta: {
    touched: boolean,
    error: string,
    warning: string,
  },
  options: Array<string>,
  selectedOption: string,
  selectedColor: string,
  fieldTitle: string,
};

export default class ComparisonInputSelect extends React.Component<Props> {
  render() {
    const {
      options,
      selectedOption,
      selectedColor,
      input: { onChange, value, ...restInput },
      fieldTitle,
      ...pickerProps
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.inputLabel}>{fieldTitle}</Text>
        <View style={styles.buttonsContainer}>
          {options.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => onChange(value)}
              style={
                selectedOption === value
                  ? [styles.unitButton, selectedUnitButton, { backgroundColor: selectedColor }]
                  : [styles.unitButton, unitButton]
              }
            >
              <Text style={styles.unitLabel}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  inputLabel: {
    flex: 0.5,
    color: textColor,
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
  input: {
    color: textColor,
    flex: 1,
    height: 35,
  },
  unitButton: {
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    paddingBottom: 4,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
    alignSelf: 'center',
  },
  unitLabelDisabled: {
    color: '#F5F5F5',
  },
});
