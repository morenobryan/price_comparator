// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
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
};

export default class ComparisonInputSelect extends React.Component<Props> {
  render() {
    const {
      options,
      selectedOption,
      input: { onChange, value, ...restInput },
      ...pickerProps
    } = this.props;

    return (
      <View style={styles.container}>
        {options.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => onChange(value)}
            style={
              selectedOption === value
                ? styles.unitButton
                : [styles.unitButton, styles.unitButtonDisabled]
            }
          >
            <Text style={styles.unitLabel}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  input: {
    color: '#B3E5FC',
    height: 35,
    flex: 1,
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
    backgroundColor: '#1976D2',
    borderColor: '#1565C0',
  },
  unitButtonDisabled: {
    backgroundColor: '#4FC3F7',
    borderColor: '#29B6F6',
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
  },
  unitLabelDisabled: {
    color: '#F5F5F5',
  },
});
