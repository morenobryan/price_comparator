// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondaryTextColor, textColor } from '../../shared/styles';

type Props = {
  color: string,
  disabled: boolean,
  disabledColor: string,
  label: string,
  navigation: { navigate: string => void },
  nextPage: string,
  icon: string,
};

const CompareButton = ({
  color,
  disabled,
  disabledColor,
  icon,
  label,
  navigation,
  nextPage,
}: Props) => (
  <TouchableOpacity
    style={[
      styles.submitButton,
      disabled
        ? { borderColor: 'transparent', backgroundColor: disabledColor }
        : { borderColor: textColor, backgroundColor: color, elevation: 3 },
    ]}
    onPress={() => navigation.navigate(nextPage)}
    disabled={disabled}
  >
    <Text style={[disabled ? styles.disabledSubmitLabel : styles.submitLabel, styles.icon]}>
      {icon}
    </Text>
    <Text style={disabled ? styles.disabledSubmitLabel : styles.submitLabel}>{label}</Text>
  </TouchableOpacity>
);

export default CompareButton;

const styles = StyleSheet.create({
  submitLabel: {
    color: textColor,
    fontFamily: 'proximaNovaAltRegular',
  },
  disabledSubmitLabel: {
    color: '#eee',
    fontFamily: 'proximaNovaAltRegular',
  },
  submitButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  icon: {
    paddingRight: 5,
    fontFamily: 'flaticon',
  },
});
