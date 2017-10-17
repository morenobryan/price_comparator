import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from './NavButton';

const bagIcon = '\uf100';
const toiletPaper1 = '\uf101';
const toiletPaper = '\uf102';
const drink = '\uf103';
const water = '\uf104';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Escolha a categoria</Text>
    <View style={styles.buttonContainer}>
      <NavButton
        backgroundColor="#1A237E"
        color="#C5CAE9"
        iconColor="#C5CAE9"
        navigation={navigation}
        icon={drink}
        text="LÍQUIDOS"
        pageName="ComparePaper"
      />
      <NavButton
        backgroundColor="#1A237E"
        color="#C5CAE9"
        iconColor="#C5CAE9"
        navigation={navigation}
        icon={bagIcon}
        text="SÓLIDOS"
        pageName="ComparePaper"
      />
      <NavButton
        backgroundColor="#1A237E"
        color="#C5CAE9"
        iconColor="#C5CAE9"
        navigation={navigation}
        icon={toiletPaper}
        text="PAPEL HIGIÊNICO"
        pageName="ComparePaper"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3949AB',
    paddingTop: 50,
    paddingBottom: 30,
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
    alignSelf: 'center',
    color: '#7986CB',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
