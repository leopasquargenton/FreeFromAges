import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 125,
    width: 264,
  },
});
