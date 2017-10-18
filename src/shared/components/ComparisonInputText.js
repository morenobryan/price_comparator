// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { KeyboardType, ReturnKeyType } from '../../types';

type Props = {
  input: {
    onChange: any => void,
  },
  keyboardType: KeyboardType,
  meta: {
    touched: boolean,
    error: string,
    warning: string,
  },
  onEnter: () => void,
  refField: any,
  returnKeyType: ReturnKeyType,
  selectionColor: string,
};

export default class ComparisonInput extends React.Component<Props> {
  render() {
    const {
      input: { onChange, ...restInput },
      keyboardType,
      meta: { touched, error, warning },
      onEnter,
      refField,
      returnKeyType,
      selectionColor,
    } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={keyboardType}
          onChangeText={onChange}
          onSubmitEditing={onEnter}
          ref={refField}
          returnKeyType={returnKeyType}
          selectionColor={selectionColor}
          style={[styles.input, touched && error ? styles.errorInput : undefined]}
          underlineColorAndroid="transparent"
          {...restInput}
        />
        {touched &&
          ((error && <Text style={styles.error}>{error}</Text>) ||
            (warning && <Text>{warning}</Text>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
    flex: 1,
    fontFamily: 'proximaNovaAltRegular',
    padding: 0,
  },
  errorInput: {
    borderColor: '#e53935',
  },
  error: {
    fontFamily: 'proximaNovaAltRegular',
    textAlign: 'center',
    color: '#e53935',
  },
});
