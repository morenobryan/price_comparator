// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  name: string,
  selected: boolean,
  onPress: () => void,
};

export default ({ name, selected, onPress }: Props) => (
  <TouchableOpacity
    style={[styles.unitButton, selected ? styles.unitButtonSelected : undefined]}
    onPress={onPress}
  >
    <Text style={styles.unitLabel}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  unitButton: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    paddingTop: 3,
    paddingRight: 7,
    paddingBottom: 5,
    paddingLeft: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1976D2',
    alignSelf: 'stretch',
    flex: 1,
  },
  unitButtonSelected: {
    backgroundColor: '#1976D2',
    borderColor: '#1565C0',
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
    textAlign: 'center',
    color: '#B3E5FC',
  },
});
