// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  name: string,
  result: string,
  economyPercentage: string,
};

const BestProductResult = ({ name, result, economyPercentage }: Props) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{name}</Text>
      <View>
        <Text style={styles.bigText}>R$ {result}</Text>
        <Text style={styles.text}>Custo deste produto por metro</Text>
      </View>
      <View>
        <Text style={styles.bigText}>{economyPercentage}%</Text>
        <Text style={styles.text}>Economia comprando este produto</Text>
      </View>
    </View>
  );
};

export default BestProductResult;

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    paddingBottom: 30,
    alignSelf: 'stretch',
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
  bigText: {
    fontSize: 35,
    color: '#90CAF9',
    fontFamily: 'proximaNovaAltBold',
  },
  text: {
    color: '#90CAF9',
    fontFamily: 'proximaNovaAltBold',
    fontSize: 18,
  },
});
