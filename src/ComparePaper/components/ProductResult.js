// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormattedCurrency } from 'react-native-globalize';

type Props = {
  name: string,
  result: string,
};

const ComparePaperResult = ({ name, result }: Props) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{name}</Text>
      <View>
        <FormattedCurrency value={result} maximumFractionDigits={4} style={styles.bigText} />
        <Text style={styles.text}>é o custo deste produto por metro</Text>
      </View>
    </View>
  );
};

export default ComparePaperResult;

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    paddingBottom: 30,
    flex: 0.4,
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 20,
    color: '#0D47A1',
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
