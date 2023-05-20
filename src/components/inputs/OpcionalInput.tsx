import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  TextInputMask,
  type TextInputMaskProps,
  type TextInputMaskTypeProp,
} from 'react-native-masked-text';

interface OpcionalInputProps extends TextInputMaskProps {
  type: TextInputMaskTypeProp;
  error?: string;
}

export function OpcionalInput({ type, error, ...rest }: OpcionalInputProps) {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInputMask type={type} style={styles.input} placeholderTextColor='#939393' {...rest} />
        <Text style={styles.text}>Opcional</Text>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    height: 45,
    borderRadius: 100,
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22,
  },
  text: {
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular_Italic',
    lineHeight: 16.5,
    color: '#979797',
    fontSize: 11,
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
