// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo';
import ProductOne from './ProductOne';
import ProductTwo from './ProductTwo';
import CompareButton from '../../shared/components/CompareButton';
import { beigeGradient, orange, textColor, genericContainer } from '../../shared/styles';

type Props = {
  disabledSubmit: boolean,
  navigation: { navigate: string => void, goBack: (?string) => void },
};

export default ({ disabledSubmit, navigation }: Props) => (
  <LinearGradient colors={beigeGradient} style={genericContainer}>
    <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
      <ProductOne titleColor={orange} navigation={navigation} />
      <ProductTwo titleColor={orange} navigation={navigation} />
      <CompareButton
        disabled={disabledSubmit}
        navigation={navigation}
        color={orange}
        disabledColor="#CCC"
        nextPage="CompareSolidsResult"
        label="COMPARAR"
      />
    </KeyboardAwareScrollView>
  </LinearGradient>
);
