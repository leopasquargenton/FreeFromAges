import React from 'react';
import { type TextInputProps, TextInput, Text, StyleSheet } from 'react-native';

interface InputFieldProps extends TextInputProps {
  error?: string;
}

export function InputField({ error, ...rest }: InputFieldProps) {
  return (
    <>
      <TextInput style={styles.inputView} placeholderTextColor='#939393' {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    height: 45,
    borderRadius: 100,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22,
    paddingLeft: 18,
    marginTop: 10,
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
