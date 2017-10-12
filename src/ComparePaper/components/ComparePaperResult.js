// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const ComparePaperResult = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, styles.subContainerOne]}>
        <Text style={[styles.title, styles.titleOne]}>PRODUTO 1</Text>
        <Text style={styles.inputOne}>{props.productOneResult}</Text>
      </View>
      <View style={[styles.subContainer, styles.subContainerTwo]}>
        <Text style={[styles.title, styles.titleTwo]}>PRODUTO 2</Text>
        <Text style={styles.inputTwo}>{props.productTwoResult}</Text>
      </View>

      <View style={[styles.subContainer, styles.subContainerTwo]}>
        <Text style={styles.inputTwo}>Melhor produto: {props.bestProduct}</Text>
      </View>

      <View style={[styles.subContainer, styles.subContainerTwo]}>
        <Text style={styles.inputTwo}>Economia de: {props.economyPercentage} %</Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.navigation.navigate('ComparePaper')}
      >
        <Text style={[styles.unitLabel, styles.unitLabelTwo]}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.navigation.navigate('ComparePaperResult')}
      >
        <Text style={[styles.unitLabel, styles.unitLabelTwo]}>Comparar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComparePaperResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
  },
  subContainer: {
    padding: 20,
    flex: 0.5,
    alignSelf: 'stretch',
  },
  subContainerOne: {
    backgroundColor: '#1E88E5',
  },
  subContainerTwo: {
    backgroundColor: '#039BE5',
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
  },
  titleOne: {
    color: '#0D47A1',
  },
  titleTwo: {
    color: '#01579B',
  },
  unitButton: {
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 2,
    paddingRight: 7,
    paddingBottom: 4,
    paddingLeft: 7,
    borderWidth: 1,
    borderRadius: 5,
  },
  unitButtonOne: {
    backgroundColor: '#1976D2',
    borderColor: '#1565C0',
  },
  unitButtonTwo: {
    backgroundColor: '#0288D1',
    borderColor: '#0277BD',
  },
  unitLabel: {
    fontFamily: 'proximaNovaAltRegular',
  },
  unitLabelOne: {
    color: '#B3E5FC',
  },
  unitLabelTwo: {
    color: '#B3E5FC',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 0.5,
    color: '#B3E5FC',
    textAlign: 'right',
    marginRight: 10,
    fontFamily: 'proximaNovaAltRegular',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
    flex: 0.5,
    fontFamily: 'proximaNovaAltRegular',
    padding: 0,
  },
  inputOne: {
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
  },
  inputTwo: {
    borderColor: '#B3E5FC',
    color: '#B3E5FC',
  },
  submitButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0D47A1',
  },
  submitText: {},
});
