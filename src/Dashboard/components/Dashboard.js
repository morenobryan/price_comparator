import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default () => {
  let pic = {
    uri:
      "https://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-and-passa-a-bola-romario.jpg"
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reloads.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Image source={pic} style={{ height: 400, width: 360 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
