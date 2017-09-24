// @flow
import React from "react";
import { Field } from "redux-form";
import { StyleSheet, Text, TextInput, Button, View, Image } from "react-native";

const submit = (values, _dispatcher, props) => {
  console.log("values", values);
  console.log("dispatcher", _dispatcher);
  // console.log("props", props);
};

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput
      style={{ height: 40, width: 300 }}
      onChangeText={onChange}
      {...restInput}
    />
  );
};

const calculate = props => {
  console.log("props", props);
};

const ComparePaper = props => {
  const { handleSubmit } = props;

  return (
    <View style={styles.container}>
      <Text>Quantidade de Rolos</Text>
      <Field name="rollAmount" component={renderInput} />
      <Text>Comprimento do Rolo</Text>
      <Field name="rollWidth" component={renderInput} />
      <Text>Unidade do Comprimento</Text>
      <Field name="widthUnit" component={renderInput} />
      <Text>Preço</Text>
      <Field name="price" component={renderInput} />
      <Button
        onPress={handleSubmit(submit)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text>{calculate(props)}</Text>
    </View>
  );
};

export default ComparePaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
