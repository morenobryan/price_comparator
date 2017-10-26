// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondaryTextColor } from '../../shared/styles';

type Props = {
  color: string,
  disabled: boolean,
  disabledColor: string,
  label: string,
  navigation: { navigate: string => void },
  nextPage: string,
};

const CompareButton = ({ color, disabled, disabledColor, label, navigation, nextPage }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        disabled ? { backgroundColor: disabledColor } : { backgroundColor: color, elevation: 3 },
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
    color: secondaryTextColor,
    fontFamily: 'proximaNovaAltRegular',
  },
  disabledSubmitLabel: {
    color: '#eee',
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
});
