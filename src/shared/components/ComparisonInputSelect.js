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
                ? [styles.unitButton, selectedUnitButton]
                : [styles.unitButton, styles.unitButtonDisabled, unitButton]
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
    flexDirection: 'row',
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
  unitButtonDisabled: {
    elevation: 3,
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
    alignSelf: 'center',
  },
  unitLabelDisabled: {
    color: '#F5F5F5',
  },
});
