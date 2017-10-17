import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default ({ navigation, backgroundColor, color, iconColor, icon, text, pageName }) => {
  const styles = StyleSheet.create({
    navButton: {
      backgroundColor,
      padding: 30,
      flexDirection: 'row',
      // marginTop: -1,
      // borderBottomWidth: 1,
      // borderTopWidth: 1,
      // borderColor: '#3F51B5',
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
