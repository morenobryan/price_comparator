// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  navigation: { navigate: string => void },
  label: string,
  disabled: boolean,
  nextPage: string,
};

const CompareButton = ({ navigation, disabled, label, nextPage }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        disabled ? styles.disabledSubmitButton : styles.enabledSubmitButton,
      ]}
      onPress={() => navigation.navigate(nextPage)}
      disabled={disabled}
    >
      <Text style={disabled ? styles.disabledSubmitLabel : styles.submitLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CompareButton;

const styles = StyleSheet.create({
  submitLabel: {
    color: '#B3E5FC',
    fontFamily: 'proximaNovaAltRegular',
  },
  disabledSubmitLabel: {
    color: '#fff',
    fontFamily: 'proximaNovaAltRegular',
  },
  submitButton: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  enabledSubmitButton: {
    backgroundColor: '#0D47A1',
    elevation: 3,
  },
  disabledSubmitButton: {
    backgroundColor: '#ccc',
  },
});
