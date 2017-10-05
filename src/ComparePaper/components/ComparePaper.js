// @flow
import React from 'react';
import { Field } from 'redux-form';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  View,
  Image,
} from 'react-native';

const renderInput = ({ input: { onChange, ...restInput }, returnKeyType, keyboardType }) => (
  <TextInput
    underlineColorAndroid="transparent"
    keyboardType={keyboardType}
    returnKeyType={returnKeyType}
    style={styles.textInput}
    onChangeText={onChange}
    {...restInput}
  />
);

const ComparePaper = props => {
  const { handleSubmit, calculate, navigation } = props;

  const submit = (values, dispatch, props) => {
    calculate();
  };
  return <View style={styles.container}>
      <View style={[styles.subContainer, styles.subContainerOne]}>
        <Text style={[styles.title, styles.titleOne]}>PRODUTO 1</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Quantidade de Rolos</Text>
          <Field name="rollAmount" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Comprimento do Rolo</Text>
          <Field name="rollWidth" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Unidade</Text>
          <Field name="widthUnit" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Preço</Text>
          <Field name="price" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
      </View>

      <View style={[styles.subContainer, styles.subContainerTwo]}>
        <Text style={[styles.title, styles.titleTwo]}>PRODUTO 2</Text>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.inputTwo]}>Quantidade de Rolos</Text>
          <Field name="rollAmount" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.inputTwo]}>Comprimento do Rolo</Text>
          <Field name="rollWidth" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.inputTwo]}>Unidade</Text>
          <Field name="widthUnit" keyboardType="numeric" returnKeyType="next" component={renderInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.inputTwo]}>Preço</Text>
          <Field name="price" keyboardType="numeric" returnKeyType="go" component={renderInput} />
        </View>
      </View>

      <Button style={styles.submitButton} onPress={() => navigation.navigate('ComparePaperResult')} color="#841584" title="Result" accessibilityLabel="Go to the Result" />
    </View>;
};

export default ComparePaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  subContainer: {
    padding: 30,
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
