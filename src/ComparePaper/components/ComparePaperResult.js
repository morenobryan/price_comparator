// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductResult from './ProductResult';
import BestProductResult from './BestProductResult';

const ComparePaperResult = props => {
  return (
    <View style={styles.container}>
      {props.bestProduct === props.productOneResult ? (
        <BestProductResult
          name="PRODUTO 1"
          result={props.productOneResult}
          economyPercentage={props.economyPercentage}
        />
      ) : (
        <ProductResult name="PRODUTO 1" result={props.productOneResult} />
      )}
      {props.bestProduct === props.productTwoResult ? (
        <BestProductResult
          name="PRODUTO 2"
          result={props.productTwoResult}
          economyPercentage={props.economyPercentage}
        />
      ) : (
        <ProductResult name="PRODUTO 2" result={props.productTwoResult} />
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('ComparePaper')}
        >
          <Text style={styles.buttonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('ComparePaperResult')}
        >
          <Text style={styles.buttonText}>NOVA COMPARAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComparePaperResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
    paddingTop: 30,
  },
  buttonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0D47A1',
    elevation: 3,
    height: 55,
  },
  buttonText: {
    color: '#B3E5FC',
    fontFamily: 'proximaNovaAltRegular',
  },
});
