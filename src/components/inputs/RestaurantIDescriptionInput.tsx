import React from 'react';
import { View, TextInput, StyleSheet, Text, type TextInputProps } from 'react-native';

interface RestauranteDescriptionInputProps extends TextInputProps {
  error?: string;
}

export function RestaurantIDescriptionInput({ error, ...rest }: RestauranteDescriptionInputProps) {
  return (
    <>
      <View style={styles.inputView}>
        <TextInput placeholderTextColor='#939393' maxLength={1500} multiline {...rest} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    borderRadius: 20,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 20,
    padding: 18,
    backgroundColor: '#fff',
  },
  error: {
    color: '#ff4040',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
});
