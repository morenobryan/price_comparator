// @flow
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductOne from './ProductOne';
import ProductTwo from './ProductTwo';
import CompareButton from '../../shared/components/CompareButton';

type Props = {
  disabledSubmit: boolean,
  navigation: { navigate: string => void, goBack: (?string) => void },
};

export default class FormComponent extends React.Component<Props> {
  render() {
    const { disabledSubmit, navigation } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutoAutomaticScroll extraScrollHeight={60}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>VOLTAR</Text>
          </TouchableOpacity>
          <ProductOne navigation={navigation} />
          <ProductTwo navigation={navigation} />
          <CompareButton
            disabled={disabledSubmit}
            navigation={navigation}
            nextPage="CompareSolidsResult"
            label="COMPARAR"
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    flex: 1,
  },
});
