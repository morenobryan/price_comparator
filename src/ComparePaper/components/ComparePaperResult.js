// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductResult from './ProductResult';
import BestProductResult from './BestProductResult';

type Props = {
  navigation: {
    navigate: string => void,
  },
  bestProduct: number,
  economyPercentage: number,
  productOneResult: number,
  productTwoResult: number,
};

const ComparePaperResult = ({
  navigation,
  bestProduct,
  productOneResult,
  productTwoResult,
  economyPercentage,
}: Props) => {
  return (
    <View style={styles.container}>
      {bestProduct === productOneResult ? (
        <BestProductResult
          name="PRODUTO 1"
          result={productOneResult}
          economyPercentage={economyPercentage}
        />
      ) : (
        <ProductResult name="PRODUTO 1" result={productOneResult} />
      )}
      {bestProduct === productTwoResult ? (
        <BestProductResult
          name="PRODUTO 2"
          result={productTwoResult}
          economyPercentage={economyPercentage}
        />
      ) : (
        <ProductResult name="PRODUTO 2" result={productTwoResult} />
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ComparePaper')}>
          <Text style={styles.buttonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ComparePaperResult')}
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
