// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Picker, TextInput, View } from 'react-native';
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
};

export default class ComparisonInputSelect extends React.Component<Props> {
  render() {
    const { options, input: { onChange, value, ...restInput } } = this.props;

    return (
      <View style={styles.container}>
        <Picker
          onValueChange={onChange}
          style={styles.input}
          selectedValue={value}
          mode="dropdown"
          {...restInput}
        >
          {options.map(option => <Picker.Item key={option} label={option} value={option} />)}
        </Picker>
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
});
