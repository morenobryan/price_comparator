// @flow
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type Props = {
  navigation: {
    navigate: string => void,
  },
  backgroundColor: string,
  color: string,
  iconColor: string,
  icon: string,
  text: string,
  pageName: string,
};

export default ({ navigation, backgroundColor, color, iconColor, icon, text, pageName }: Props) => {
  const styles = StyleSheet.create({
    navButton: {
      backgroundColor,
      padding: 30,
      flexDirection: 'row',
      elevation: 3,
    },
    buttonText: {
      color,
      alignSelf: 'center',
      fontFamily: 'proximaNovaAltRegular',
      fontSize: 24,
    },
    icon: {
      color: iconColor,
      alignSelf: 'center',
      fontFamily: 'flaticon',
      fontSize: 50,
      marginRight: 30,
    },
  });

  return (
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate(pageName)}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
