import React from "react";
import {StyleSheet,View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export interface RestrictionProps {
  name?: string;
}
export function RestrictionUser ({name}:RestrictionProps) {
 
  return (
    <View style={styles.container}>
      <BouncyCheckbox
      style={styles.checkbox}
      text={name}
      size={25}
      isChecked={true}
      onPress={() => { }}
      fillColor="#806CFB"
      unfillColor="#FFF"
      textStyle={{textDecorationLine: "none",color:  '#806CFB' , fontSize:15, fontFamily:'Poppins_400Regular', lineHeight:22.5}}/>
    </View>
  
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10
  
  },
  checkbox: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
   
  },
   restrictionType:{
     fontFamily:'Poppins_400Regular',
     fontSize:11,
     lineHeight:16.5,
     color:'#9A9A9A',
     marginRight:10,
     alignItems:'center',
    justifyContent:'center'
   },
   icon:{
    alignItems:'center',
    justifyContent:'center'
   },
   modal: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
   },
   typeView:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
   }
})