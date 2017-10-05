// @flow
import React from 'react';
import { Field } from 'redux-form';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

const ComparePaperResult = props => {
  return (
    <View style={styles.container}>
      <Text>Resultado</Text>
      <Text>{props.calculated}</Text>
    </View>
  );
};

export default ComparePaperResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
