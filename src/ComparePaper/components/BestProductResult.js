// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormattedCurrency, FormattedNumber } from 'react-native-globalize';

type Props = {
  name: string,
  result: string,
  economyPercentage: string,
};

const BestProductResult = ({ name, result, economyPercentage }: Props) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.textContainer}>
        <FormattedCurrency value={result} maximumFractionDigits={4} style={styles.bigText} />
        <Text style={styles.text}>é o custo deste produto por metro</Text>
      </View>
      <View>
        <FormattedNumber value={economyPercentage} numberStyle="percent" style={styles.bigText} />
        <Text style={styles.text}>de economia comprando este produto</Text>
      </View>
    </View>
  );
};

export default BestProductResult;

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#0D47A1',
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
    color: '#90CAF9',
    fontFamily: 'proximaNovaSemibold',
  },
  text: {
    color: '#90CAF9',
    fontFamily: 'proximaNovaSemibold',
    fontSize: 18,
  },
});
