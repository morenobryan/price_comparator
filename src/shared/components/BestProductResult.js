// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormattedCurrency, FormattedNumber } from 'react-native-globalize';
import { secondaryTextColor } from '../styles';

type Props = {
  name: string,
  result: number,
  baseUnit: string,
  economyPercentage: number,
  titleColor: string,
  backgroundColor: string,
};

export default ({
  name,
  result,
  baseUnit,
  economyPercentage,
  titleColor,
  backgroundColor,
}: Props) => (
  <View style={[styles.subContainer, { backgroundColor }]}>
    <Text style={styles.title}>{name}</Text>
    <View style={styles.textContainer}>
      <FormattedCurrency value={result} maximumFractionDigits={4} style={styles.bigText} />
      <Text style={styles.text}>é o custo deste produto por {baseUnit}</Text>
    </View>
    <View>
      <FormattedNumber value={economyPercentage} numberStyle="percent" style={styles.bigText} />
      <Text style={styles.text}>de economia comprando este produto</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    paddingBottom: 30,
    flex: 0.6,
    elevation: 10,
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
    color: '#42A5F5',
  },
  textContainer: {
    marginBottom: 20,
  },
  bigText: {
    fontSize: 35,
    color: secondaryTextColor,
    fontFamily: 'proximaNovaSemibold',
  },
  text: {
    color: secondaryTextColor,
    fontFamily: 'proximaNovaSemibold',
    fontSize: 18,
  },
});
