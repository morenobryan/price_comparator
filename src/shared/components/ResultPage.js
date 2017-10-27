// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductResult from '../components/ProductResult';
import BestProductResult from '../components/BestProductResult';
import { beige, textColor, secondaryTextColor } from '../styles';

type Props = {
  navigation: {
    navigate: string => void,
    goBack: (?string) => void,
  },
  worstProduct: number,
  economyPercentage: number,
  productOneResult: number,
  productTwoResult: number,
  backPage: string,
  baseUnit: string,
  titleColor: string,
  buttonColor: string,
  bestProductBackgroundColor: string,
};

export default ({
  navigation,
  worstProduct,
  productOneResult,
  productTwoResult,
  economyPercentage,
  backPage,
  baseUnit,
  reset,
  titleColor,
  buttonColor,
  bestProductBackgroundColor,
}: Props) => (
  <View style={styles.container}>
    {worstProduct === productOneResult ? (
      <ProductResult
        name="PRODUTO 1"
        titleColor={titleColor}
        baseUnit={baseUnit}
        result={productOneResult}
      />
    ) : (
      <BestProductResult
        name="PRODUTO 1"
        titleColor={titleColor}
        backgroundColor={bestProductBackgroundColor}
        baseUnit={baseUnit}
        result={productOneResult}
        economyPercentage={economyPercentage}
      />
    )}
    {worstProduct === productTwoResult ? (
      <ProductResult
        name="PRODUTO 2"
        titleColor={titleColor}
        baseUnit={baseUnit}
        result={productTwoResult}
      />
    ) : (
      <BestProductResult
        name="PRODUTO 2"
        titleColor={titleColor}
        backgroundColor={bestProductBackgroundColor}
        baseUnit={baseUnit}
        result={productTwoResult}
        economyPercentage={economyPercentage}
      />
    )}

    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>EDITAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>NOVA COMPARAÇÃO</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: beige,
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
    elevation: 3,
    height: 55,
    borderWidth: 1,
    borderColor: textColor,
  },
  buttonText: {
    color: textColor,
    fontFamily: 'proximaNovaAltRegular',
  },
});
