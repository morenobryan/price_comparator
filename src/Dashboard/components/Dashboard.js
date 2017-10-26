// @flow
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import NavButton from './NavButton';
import {
  beigeGradient,
  yellow,
  orange,
  red,
  textColor,
  secondaryTextColor,
} from '../../shared/styles';

const bagIcon = '\uf100';
const toiletPaper1 = '\uf101';
const toiletPaper = '\uf102';
const drink = '\uf103';
const water = '\uf104';

type Props = {
  navigation: {
    navigate: string => void,
  },
};

export default ({ navigation }: Props) => (
  <LinearGradient colors={beigeGradient} style={styles.container}>
    <Text style={styles.title}>Escolha a categoria</Text>
    <View style={styles.buttonContainer}>
      <NavButton
        backgroundColor={yellow}
        color={secondaryTextColor}
        iconColor={secondaryTextColor}
        navigation={navigation}
        icon={drink}
        text="LÍQUIDOS"
        pageName="CompareLiquids"
      />
      <NavButton
        backgroundColor={orange}
        color={secondaryTextColor}
        iconColor={secondaryTextColor}
        navigation={navigation}
        icon={bagIcon}
        text="SÓLIDOS"
        pageName="CompareSolids"
      />
      <NavButton
        backgroundColor={red}
        color={secondaryTextColor}
        iconColor={secondaryTextColor}
        navigation={navigation}
        icon={toiletPaper}
        text="PAPEL HIGIÊNICO"
        pageName="ComparePaper"
      />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50 + StatusBar.currentHeight,
    paddingBottom: 30,
  },
  title: {
    fontFamily: 'proximaNovaAltBold',
    fontSize: 30,
    marginBottom: 30,
    alignSelf: 'center',
    color: textColor,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
