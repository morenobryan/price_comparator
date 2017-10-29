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
import { solidIcon, toiletPaperIcon, drinkIcon, water } from '../../shared/icons';

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
        icon={drinkIcon}
        text="LÍQUIDOS"
        pageName="CompareLiquids"
      />
      <NavButton
        backgroundColor={orange}
        color={secondaryTextColor}
        iconColor={secondaryTextColor}
        navigation={navigation}
        icon={solidIcon}
        text="SÓLIDOS"
        pageName="CompareSolids"
      />
      <NavButton
        backgroundColor={red}
        color={secondaryTextColor}
        iconColor={secondaryTextColor}
        navigation={navigation}
        icon={toiletPaperIcon}
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
    fontFamily: 'proximaNovaSoftBold',
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
