// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

const ComparePaperResult = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, styles.subContainerOne]}>
        <Text style={[styles.title, styles.titleOne]}>PRODUTO 1</Text>
        <Text style={styles.inputOne}>{props.calculated}</Text>
      </View>
      <View style={[styles.subContainer, styles.subContainerTwo]}>
        <Text style={[styles.title, styles.titleTwo]}>PRODUTO 2</Text>
        <Text style={styles.inputTwo}>{props.calculated}</Text>
      </View>

      <Button
        style={styles.submitButton}
        onPress={() => props.navigation.navigate('ComparePaper')}
        color="#0D47A1"
        title="Voltar"
        accessibilityLabel="Voltar"
      />
      <Button
        style={styles.submitButton}
        onPress={() => props.navigation.navigate('ComparePaperResult')}
        color="#0D47A1"
        title="Comparar"
        accessibilityLabel="Comparar"
      />
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
});
