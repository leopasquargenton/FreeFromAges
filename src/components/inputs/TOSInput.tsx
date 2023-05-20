import React, { Dispatch, SetStateAction, useState } from 'react';
import { Linking, View } from 'react-native';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

// Todo componente tera:

// 1) Uma interface "nomeDoComponenteProps" com os tipos dos parâmetros que deverão ser passados

interface TOSInputProps {
  label: string;
  labelLink: string;
  url: string;
  isChecked: boolean;
  handlePress(): void;
  error?:string
}

// 2) a checkbox with text "termos". 

export function TOSInput({ label, labelLink, url, isChecked, handlePress, error}: TOSInputProps) {
 

  const handleLinkPress = () => {
    Linking.openURL(url);
  };

  return (
    <>
    <View style={styles.TOSinputContainer}>
      <CheckBox
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={isChecked}
        onPress={handlePress}        
        checkedColor="#7C75F3"
      />
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.textLink}>{labelLink}</Text>
      </TouchableOpacity>
    </View>
       {error && <Text style={styles.error}>{error}</Text>}
       </>
  );
}
// 3) uma constante styles do Stylesheet que representará o design do componente. (Pegar lá do Figma)


const styles = StyleSheet.create({
  TOSinputContainer:{
    flexDirection:'row',
    width: '100%',
    height: 60,
    alignItems:'center',
    justifyContent:'flex-start'
   }, 
   text: {
    fontFamily:'Poppins_400Regular',
    fontSize:15,
    color: '#979797',
  },
  textLink: {
    textDecorationLine: 'underline',
    fontFamily:'Poppins_400Regular',
    fontSize:15,
    color: '#9797DD', 
  },
   error: {
      color: '#ff4040',
      alignSelf: 'flex-start',
      paddingLeft: 20,
      fontFamily:'Poppins_400Regular',
      fontSize:12,
      lineHeight:18
    }
});