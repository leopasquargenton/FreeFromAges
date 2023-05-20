import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';

// Todo componente tera:

// 1) Uma interface "nomeDoComponenteProps" com os tipos dos parâmetros que deverão ser passados

interface exampleButtonProps {
  label: string
  onPress: () => void;
}

// 2) Uma function com os parâmetros que representará o componente em tela. 

export function ExampleButton({ label, onPress}: exampleButtonProps) {

  return (
   <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{label}</Text>
   </TouchableOpacity>
  );
}

// 3) uma constante styles do Stylesheet que representará o design do componente. (Pegar lá do Figma)


const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    margin:30,
    backgroundColor: '#FDFDFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});