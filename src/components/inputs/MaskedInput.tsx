import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInputMask, type TextInputMaskProps } from 'react-native-masked-text';

interface MaskedInputProps extends TextInputMaskProps {
  error: string;
}

export function MaskedInput({ error, ...rest }: MaskedInputProps) {
  return (
    <>
      <TextInputMask style={styles.input} placeholderTextColor='#939393' {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
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
