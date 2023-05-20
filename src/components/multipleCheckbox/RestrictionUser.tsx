import React from "react";
import {Text,StyleSheet, TouchableOpacity,View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/Feather';
import { foodRestrictions } from "./RestrictionsData";

export interface RestrictionProps {
  name: string;
  openModal:(id: any)=> void;
  id: any
}

function handleRestriction (id:number){
  
  const restriction = foodRestrictions.find((restriction) => restriction.id === id);
  if(restriction){
    restriction.checked = !restriction.checked
   
  }  
}

export function RestrictionUser ({id,name, openModal}:RestrictionProps) {
  
  const [checkboxState, setCheckboxState] = React.useState(false);
  
  return (
    
    <View style={styles.container}>
      <BouncyCheckbox
      style={styles.checkbox}
      text={name}
      size={25}
      isChecked={checkboxState}
      onPress={() => { 
        setCheckboxState(!checkboxState);
        handleRestriction(id)
        
      }}
      fillColor="#806CFB"
      unfillColor="#FFF"
      textStyle={{textDecorationLine: "none",color: checkboxState ? '#806CFB' : '#9B9B9B', fontSize:15, fontFamily:'Poppins_400Regular', lineHeight:22.5}}/>

    {
    checkboxState?  
    <View style={styles.typeView} >
    <TouchableOpacity onPress={openModal} style={styles.modal}>
      <Text style={styles.restrictionType}>tipo de restrição</Text>
      <Icon style={styles.icon} name="chevron-down" size={20} color="#6B9ED3" />
    </TouchableOpacity>
  </View>
  : <Text />}
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