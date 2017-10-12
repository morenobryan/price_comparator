// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { KeyboardType, ReturnKeyType } from '../../types';

type Props = {
  input: {
    onChange: any => void,
  },
  meta: {
    touched: boolean,
    error: string,
    warning: string,
  },
  refField: any,
  keyboardType: KeyboardType,
  returnKeyType: ReturnKeyType,
  onEnter: () => void,
  selectionColor: string,
};

export default class ComparisonInput extends React.Component<Props> {
  render() {
    const {
      input: { onChange, ...restInput },
      meta: { touched, error, warning },
      refField,
      returnKeyType,
      keyboardType,
      onEnter,
      selectionColor,
    } = this.props;

    return (
      <View>
        <TextInput
          ref={refField}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          style={styles.textInput}
          onChangeText={onChange}
          onSubmitEditing={onEnter}
          selectionColor={selectionColor}
          {...restInput}
        />
        {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
    flex: 0.5,
    fontFamily: 'proximaNovaAltRegular',
    padding: 0,
  },
});
