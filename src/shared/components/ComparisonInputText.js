// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { KeyboardType, ReturnKeyType } from '../../types';
import { textColor } from '../../shared/styles';

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
  fieldTitle: string,
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
      fieldTitle,
    } = this.props;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.inputLabel}>{fieldTitle}</Text>
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
        </View>
        <View>
          {touched &&
            ((error && <Text style={styles.error}>{error}</Text>) ||
              (warning && <Text>{warning}</Text>))}
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
  inputLabel: {
    flex: 0.5,
    color: textColor,
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: textColor,
    color: textColor,
    flex: 0.5,
    fontFamily: 'proximaNovaAltRegular',
    padding: 0,
  },
  errorInput: {
    borderColor: '#e53935',
  },
  error: {
    fontFamily: 'proximaNovaAltRegular',
    textAlign: 'right',
    color: '#e53935',
  },
});
