// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';
import { textColor } from '../styles';

type Props = {
  name: string,
  result: number,
  baseUnit: string,
  titleColor: string,
};

export default ({ name, result, baseUnit, titleColor }: Props) => (
  <View style={styles.subContainer}>
    <Text style={[styles.title, { color: titleColor }]}>{name}</Text>
    <View>
      <FormattedCurrency value={result} maximumFractionDigits={4} style={styles.bigText} />
      <Text style={styles.text}>é o custo deste produto por {baseUnit}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    paddingBottom: 30,
    flex: 0.4,
  },
  title: {
    fontFamily: 'proximaNovaSoftBold',
    fontSize: 30,
    marginBottom: 20,
  },
  bigText: {
    fontSize: 35,
    color: textColor,
    fontFamily: 'proximaNovaSemibold',
  },
  text: {
    color: textColor,
    fontFamily: 'proximaNovaSemibold',
    fontSize: 18,
  },
});
