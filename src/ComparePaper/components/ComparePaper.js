// @flow
import React from 'react';
import { Field } from 'redux-form';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ComparisonInput extends React.Component {
  render() {
    const {
      input: { onChange, ...restInput },
      meta: { touched, error, warning },
      refField,
      returnKeyType,
      keyboardType,
      onEnter,
      selectionColor,
    } = this.props;

    return (
      <View>
        <TextInput
          ref={refField}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          style={styles.textInput}
          onChangeText={onChange}
          onSubmitEditing={onEnter}
          selectionColor={selectionColor}
          {...restInput}
        />
        {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
      </View>
    );
  }
}

export default class ComparePaper extends React.Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting, calculate, navigation } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <View style={[styles.subContainer, styles.subContainerOne]}>
            <Text style={[styles.title, styles.titleOne]}>PRODUTO 1</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Quantidade de Rolos</Text>
              <Field
                ref={componentRef => (this.rollAmount = componentRef)}
                refField="rollAmount"
                focus
                withRef
                placeholder={'Teste'}
                name="rollAmount"
                keyboardType="numeric"
                returnKeyType="next"
                selectionColor={'#0D47A1'}
                component={ComparisonInput}
                onEnter={() => this.rollWidth.getRenderedComponent().refs.rollWidth.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Comprimento do Rolo</Text>
              <Field
                ref={componentRef => (this.rollWidth = componentRef)}
                refField="rollWidth"
                withRef
                name="rollWidth"
                keyboardType="numeric"
                returnKeyType="next"
                selectionColor={'#0D47A1'}
                component={ComparisonInput}
                onEnter={() => this.widthUnit.getRenderedComponent().refs.widthUnit.focus()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Unidade</Text>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonOne]}
                onPress={this._onPressButton}
              >
                <Text style={[styles.unitLabel, styles.unitLabelOne]}>m</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonOne]}
                onPress={this._onPressButton}
              >
                <Text style={[styles.unitLabel, styles.unitLabelOne]}>cm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Preço</Text>
              <Field
                ref={componentRef => (this.price = componentRef)}
                refField="price"
                withRef
                name="price"
                keyboardType="numeric"
                returnKeyType="next"
                selectionColor={'#0D47A1'}
                component={ComparisonInput}
                onEnter={() => this.price.getRenderedComponent().refs.price.focus()}
              />
            </View>
          </View>

          <View style={[styles.subContainer, styles.subContainerTwo]}>
            <Text style={[styles.title, styles.titleTwo]}>PRODUTO 2</Text>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Quantidade de Rolos</Text>
              <Field
                name="rollAmount"
                keyboardType="numeric"
                returnKeyType="next"
                component={ComparisonInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Comprimento do Rolo</Text>
              <Field
                name="rollWidth"
                keyboardType="numeric"
                returnKeyType="next"
                component={ComparisonInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Unidade</Text>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonTwo]}
                onPress={this._onPressButton}
              >
                <Text style={[styles.unitLabel, styles.unitLabelTwo]}>m</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.unitButton, styles.unitButtonTwo]}
                onPress={this._onPressButton}
              >
                <Text style={[styles.unitLabel, styles.unitLabelTwo]}>cm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, styles.inputTwo]}>Precinho</Text>
              <Field
                name="price"
                keyboardType="numeric"
                returnKeyType="go"
                component={ComparisonInput}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('ComparePaperResult')}
            disabled={invalid || pristine || submitting}
          >
            <Text style={[styles.unitLabel, styles.unitLabelOne]}>Comparar</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

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
